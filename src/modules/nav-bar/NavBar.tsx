import React from 'react'
import { HomeIconContainer, LogoContainer, MenuContainer, MenuItem, MenuItemsContainer, NavBarContainer } from './styles';
import {ReactComponent as HomeIcon} from './home-icon.svg'
import {ReactComponent as RedHomeIcon} from './hovered-icon.svg'
import {ReactComponent as RockstarLogo} from './rockstar-logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';
import { dashboardPage, mainPage, merchPage, nftPage, otherPage, transactionPage, wlSpotsPage } from '../../constants/routing';

const NavBar = () => {
    const location = useLocation();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
  return (
    <NavBarContainer>
        <MenuContainer>
            <HomeIconContainer>
            {location.pathname === mainPage ? 
             <Link to={mainPage}><RedHomeIcon /></Link> :
             <Link to={mainPage}><HomeIcon /></Link>}
            </HomeIconContainer>
            <MenuItemsContainer>
            <MenuItem active={false} onClick = {() => window.open('https://etherscan.io/address/0x986b5281beab744aF0d2667519e48f8B28B974C0', '_blank')}>Buy Rock Token</MenuItem>
            <Link to={wlSpotsPage}><MenuItem active = {location.pathname === wlSpotsPage}>WL Spots</MenuItem></Link>
            <Link to={nftPage}><MenuItem active = {location.pathname === nftPage}>NFTs</MenuItem></Link>
            <Link to={otherPage}><MenuItem active = {location.pathname === otherPage}>RockVerse</MenuItem></Link>
            <Link to={merchPage}><MenuItem active = {location.pathname === merchPage}>Merch</MenuItem></Link>
            {isAdmin && <Link to={dashboardPage}><MenuItem active = {location.pathname === dashboardPage}>Dashboard</MenuItem></Link>}
            {isAdmin && <Link to={transactionPage}><MenuItem active = {location.pathname === transactionPage}>Transactions </MenuItem></Link>}
            </MenuItemsContainer>
        </MenuContainer>
        <LogoContainer>
            <RockstarLogo />
        </LogoContainer>
    </NavBarContainer>
  )
}

export default NavBar;