import React from 'react'
import { HomeIconContainer, LogoContainer, MenuContainer, MenuItem, MenuItemsContainer, NavBarContainer } from './styles';
import {ReactComponent as HomeIcon} from './home-icon.svg'
import {ReactComponent as RedHomeIcon} from './hovered-icon.svg'
import {ReactComponent as RockstarLogo} from './rockstar-logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';

const NavBar = () => {
    const location = useLocation();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
  return (
    <NavBarContainer>
        <MenuContainer>
            <HomeIconContainer>
            {location.pathname === '/' ? 
             <Link to='/'><RedHomeIcon /></Link> :
             <Link to='/'><HomeIcon /></Link>}
            </HomeIconContainer>
            <MenuItemsContainer>
            <Link to="/market-place"><MenuItem active = {location.pathname === '/market-place'}>WL Spots</MenuItem></Link>
            <Link to="/merchs"><MenuItem active = {location.pathname === '/merchs'}>Merch</MenuItem></Link>
            <Link to="/nfts"><MenuItem active = {location.pathname === '/nfts'}>NFTs</MenuItem></Link>
            <Link to="/others"><MenuItem active = {location.pathname === '/others'}>Others</MenuItem></Link>
            {isAdmin && <Link to="/dashboard"><MenuItem active = {location.pathname === '/dashboard'}>Dashboard</MenuItem></Link>}
            {isAdmin && <Link to="/transactions"><MenuItem active = {location.pathname === '/transactions'}>Transactions </MenuItem></Link>}
            </MenuItemsContainer>
        </MenuContainer>
        <LogoContainer>
            <RockstarLogo />
        </LogoContainer>
    </NavBarContainer>
  )
}

export default NavBar;