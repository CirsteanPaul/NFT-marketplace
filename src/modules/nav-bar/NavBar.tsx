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
            <Link to="/merchs"><MenuItem>Merch</MenuItem></Link>
            <Link to="/nfts"><MenuItem>NFTs</MenuItem></Link>
            <Link to="/others"><MenuItem>Others</MenuItem></Link>
            {isAdmin && <Link to="/dashboard"><MenuItem>Dashboard</MenuItem></Link>}
            {isAdmin && <Link to="/transactions"><MenuItem>Transactions </MenuItem></Link>}
            </MenuItemsContainer>
        </MenuContainer>
        <LogoContainer>
            <RockstarLogo />
        </LogoContainer>
    </NavBarContainer>
  )
}

export default NavBar;