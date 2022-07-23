import React from 'react'
import { HomeIconContainer, LogoContainer, MenuContainer, MenuItem, MenuItemsContainer, NavBarContainer } from './styles';
import {ReactComponent as HomeIcon} from './home-icon.svg'
import {ReactComponent as RockstarLogo} from './rockstar-logo.svg'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';

const NavBar = () => {
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
  return (
    <NavBarContainer>
        <MenuContainer>
            <HomeIconContainer>
            <HomeIcon />
            </HomeIconContainer>
            <MenuItemsContainer>
            <Link to="/market-place"><MenuItem>WL Spots</MenuItem></Link>
            <MenuItem>Merch</MenuItem>
            <MenuItem>NFTs</MenuItem>
            <MenuItem>Others</MenuItem>
            {isAdmin && <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>}
            </MenuItemsContainer>
        </MenuContainer>
        <LogoContainer>
            <RockstarLogo />
        </LogoContainer>
    </NavBarContainer>
  )
}

export default NavBar;