import { useEffect, useState } from 'react'
import MobileHeader from '../modules/mobile-header'
import NavBar from '../modules/nav-bar'
import TopMenu from '../modules/top-menu'
import { LayoutContainer, MainContentContainer, ShadowColorBottomLeft, ShadowColorBottomRight, ShadowColorTopLeft } from './styles'

const Layout = ({children, scrollable}: any): JSX.Element  => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() =>{
        const handleResize = () =>{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize);
    },[]);

  return (
    <LayoutContainer>
        {width > 1000 && <NavBar /> }
        <MainContentContainer scrollable={scrollable}>
            {width > 1000 ? <TopMenu /> : <MobileHeader />}
            {width > 800 ? <>
                <ShadowColorBottomRight />
            <ShadowColorBottomLeft />
            <ShadowColorTopLeft />
            </> : <ShadowColorTopLeft />
                
            }
             {children}
        </MainContentContainer>
    </LayoutContainer>
  )
}

export default Layout