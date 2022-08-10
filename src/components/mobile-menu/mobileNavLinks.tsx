import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dashboardPage, mainPage, merchPage, nftPage, otherPage, transactionPage, wlSpotsPage } from "../../constants/routing";
import { ConnectButton } from "../../modules/top-menu/styles";
import { useAppDispatch, useAppSelector } from "../../store";
import { disconnectBlockchainInfo, fecthBlockchainInfoAsyncAction } from "../../store/actions/blockchain-actions";
import { blockchainIsConnectedSelector } from "../../store/selectors/blockchain-selectors";
import { contractInfoBalanceSelector, contractInfoIsAdminSelector } from "../../store/selectors/contract-info-selectors";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10000;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding-top: 100px;
  display: flex;
  height: 100vh;
  list-style: none;
  background-color: black;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: .9;
  z-index: 10;
  position: fixed;
  top:0;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  text-decoration: none;
`;
const ItemLink = styled.button`
  font-size: 20px;
  border: 0;
  font-weight: 900;
  outline: 0;
  color: white;
  background-color: transparent;
  &:hover{
    cursor: pointer;
    border: 0;
    outline: 0;
  }
`;
const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props: any) {
  const [isOpen, setOpen] = useState(false);
  const isAdmin = useAppSelector(contractInfoIsAdminSelector);
  const balance = useAppSelector(contractInfoBalanceSelector);
  const isConnected = useAppSelector(blockchainIsConnectedSelector);
  const dispatch = useAppDispatch();
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
        <LinkItem>
          <Link onClick={() => setOpen(false)} to={mainPage}><ItemLink>Home</ItemLink></Link>
          </LinkItem>
          <LinkItem>
          <ItemLink onClick = {() => {
            window.open('https://opensea.io/collection/rockstarapesclub', '_blank')
             setOpen(false)
          }}
          >Buy Genesis Token</ItemLink>
          </LinkItem>
          <LinkItem>
          <Link onClick={() => setOpen(false)} to={wlSpotsPage}><ItemLink>WL Spots</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link onClick={() => setOpen(false)} to={nftPage}><ItemLink>NFTs</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link onClick={() => setOpen(false)} to={otherPage}><ItemLink>RockVerse</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link onClick={() => setOpen(false)} to={merchPage}><ItemLink>Merch</ItemLink></Link>
          </LinkItem>
          <LinkItem>
            <ItemLink onClick={() =>{
               window.open("http://rockstarapes.io", "_self")
                setOpen(false) }}>Website</ItemLink>
          </LinkItem>
          <LinkItem>
            <ItemLink onClick={() => { 
              window.open("https://staking.rockstarapes.io/", "_self")
               setOpen(false)}}>Staking</ItemLink>
          </LinkItem>

          <LinkItem>
            {isAdmin && <Link onClick={() => setOpen(false)} to={dashboardPage}><ItemLink>Dashboard</ItemLink></Link>}
          </LinkItem>
          <LinkItem>
          {isAdmin &&<Link onClick={() => setOpen(false)} to={transactionPage}><ItemLink>Transactions</ItemLink></Link>}
          </LinkItem>
          <LinkItem>
          {`Balance: ${balance} tokens`}
            
          </LinkItem>
                {isConnected ? <ConnectButton style={{height: "40px"}} onClick={() => dispatch(disconnectBlockchainInfo())}>Disconnect</ConnectButton>
                : <ConnectButton style={{height: "40px"}} onClick={() => dispatch(fecthBlockchainInfoAsyncAction())}>Connect</ConnectButton>}
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}