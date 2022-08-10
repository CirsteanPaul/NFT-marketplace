import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { disconnectBlockchainInfo, fecthBlockchainInfoAsyncAction } from '../../store/actions/blockchain-actions'
import { blockchainIsConnectedSelector } from '../../store/selectors/blockchain-selectors'
import { contractInfoBalanceSelector, contractInfoLoadingSelector } from '../../store/selectors/contract-info-selectors'
import { BalanceContainer, ConnectButton, LeftSide, RedirectButton, RightSide, TopMenuContainer } from './styles'
import { ReactComponent as OpenseaLogo } from './opensea-logo.svg';
import { ReactComponent as TwitterLogo } from './twitter-logo.svg';
import { LogoContainer } from './styles'

const TopMenu = () => {
    const dispatch = useAppDispatch();
    const isConnected = useAppSelector(blockchainIsConnectedSelector);
    const balance = useAppSelector(contractInfoBalanceSelector);
    const loading = useAppSelector(contractInfoLoadingSelector);
    if(isConnected && !loading){
        return (
            <TopMenuContainer>
            <LeftSide>
                <RedirectButton onClick={() => window.open("http://rockstarapes.io", "_self")}>Website</RedirectButton>
                <RedirectButton onClick={() => window.open("https://staking.rockstarapes.io/", "_self")}>Staking</RedirectButton>
                <RedirectButton onClick={() => window.open("https://opensea.io/collection/rockstarapesclub", "_blank")}>Opensea</RedirectButton>
            <RedirectButton onClick={() => window.open("https://twitter.com/RockstarApes", "_blank")}>Twitter</RedirectButton>
            
            </LeftSide>
            <RightSide>
                <BalanceContainer>{`Balance: ${balance} tokens`}</BalanceContainer>
                <ConnectButton onClick={() => dispatch(disconnectBlockchainInfo())}>Disconnect</ConnectButton>
            </RightSide>
        </TopMenuContainer>
        )
    }
  return (
    <TopMenuContainer>
        <LeftSide>
            <RedirectButton onClick={() => window.open("http://rockstarapes.io", "_self")}>Website</RedirectButton>
            <RedirectButton onClick={() => window.open("https://staking.rockstarapes.io/", "_self")}>Staking</RedirectButton>
            <RedirectButton onClick={() => window.open("https://opensea.io/collection/rockstarapesclub", "_blank")}>Opensea</RedirectButton>
            <RedirectButton onClick={() => window.open("https://twitter.com/RockstarApes", "_blank")}>Twitter</RedirectButton>
            
        </LeftSide>
        <RightSide>
            <ConnectButton onClick={() => dispatch(fecthBlockchainInfoAsyncAction())}>Connect</ConnectButton>
        </RightSide>
    </TopMenuContainer>
  )
}

export default TopMenu