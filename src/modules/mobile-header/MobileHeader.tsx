import React from 'react'
import MobileMenu from '../../components/mobile-menu'
import {ReactComponent as RockstarLogo} from './rockstar-logo.svg'
import { MobileContainer } from './styles'

const MobileHeader = () => {
  return (
    <MobileContainer>
        <RockstarLogo />
        <MobileMenu />
    </MobileContainer>
  )
}

export default MobileHeader