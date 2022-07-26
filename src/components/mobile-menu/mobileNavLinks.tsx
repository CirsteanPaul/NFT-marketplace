import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding-top: 100px;
  display: flex;
  height: 100vh;
  list-style: none;
  background-color: grey;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: .8;
  z-index: 10;
  position: fixed;
  top:0;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
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
  color: black;
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
          <Link to="/market-place"><ItemLink>WL Spots</ItemLink></Link>
          </LinkItem>
          <LinkItem>
            <Link to="/merchs"><ItemLink>Merch</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link to="/nfts"><ItemLink>NFTs</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link to="/others"><ItemLink>Others</ItemLink></Link>
            </LinkItem>
            <LinkItem>
            <Link to="#"><ItemLink>WL Spots</ItemLink></Link>
            </LinkItem>
          <LinkItem>
            <Link to="#"><ItemLink>Website</ItemLink></Link>
          </LinkItem>
          <LinkItem>
            <Link to="#"><ItemLink>Staking</ItemLink></Link>
          </LinkItem>
          <LinkItem>
            {isAdmin && <Link to="/dashboard"><ItemLink>Dashboard</ItemLink></Link>}
          </LinkItem>
          <LinkItem>
          {`Balance: ${balance} tokens`}
            
          </LinkItem>
                {isConnected ? <ConnectButton onClick={() => dispatch(disconnectBlockchainInfo())}>Disconnect</ConnectButton>
                : <ConnectButton onClick={() => dispatch(fecthBlockchainInfoAsyncAction())}>Connect</ConnectButton>}
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}