import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { disconnectBlockchainInfo, fecthBlockchainInfoAsyncAction } from '../../store/actions/blockchain-actions'
import { blockchainIsConnectedSelector } from '../../store/selectors/blockchain-selectors'
import { contractInfoBalanceSelector, contractInfoLoadingSelector } from '../../store/selectors/contract-info-selectors'
import { BalanceContainer, ConnectButton, LeftSide, RedirectButton, RightSide, TopMenuContainer } from './styles'

const TopMenu = () => {
    const dispatch = useAppDispatch();
    const isConnected = useAppSelector(blockchainIsConnectedSelector);
    const balance = useAppSelector(contractInfoBalanceSelector);
    const loading = useAppSelector(contractInfoLoadingSelector);
    if(isConnected && !loading){
        return (
            <TopMenuContainer>
            <LeftSide>
                <RedirectButton onClick={() => window.open("https://google.com", "_self")}>Website</RedirectButton>
                <RedirectButton onClick={() => window.open("https://google.com", "_self")}>Staking</RedirectButton>
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
            <RedirectButton onClick={() => window.open("https://google.com", "_self")}>Website</RedirectButton>
            <RedirectButton onClick={() => window.open("https://google.com", "_self")}>Staking</RedirectButton>
        </LeftSide>
        <RightSide>
            <ConnectButton onClick={() => dispatch(fecthBlockchainInfoAsyncAction())}>Connect</ConnectButton>
        </RightSide>
    </TopMenuContainer>
  )
}

export default TopMenu