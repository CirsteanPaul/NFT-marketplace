import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout'
import { useAppDispatch } from '../../store';
import { getLatestItemAsyncAction } from '../../store/actions/market-products-actions';
import LatestItem from './components';
import { EarnInfo, ExploreMoreButton, HomeContainer, InfoButtonsSection, InformationSectionContainer, InformationTitle, JoinDiscordButton  } from './styles';

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    useEffect(() =>{
        dispatch(getLatestItemAsyncAction());
    },[dispatch]);
  return (
    <Layout>
    <HomeContainer>
        <InformationSectionContainer>
            <InformationTitle>Token exchange</InformationTitle>
            <EarnInfo>Earn tokens by staking your NFTs and exchange them for products</EarnInfo>
            <InfoButtonsSection>
            <ExploreMoreButton onClick={() => navigate("/market-place")}>Explore items</ExploreMoreButton>
            <JoinDiscordButton onClick={() => window.open("#","_blank")}>Join our Discord</JoinDiscordButton>
            </InfoButtonsSection>
        </InformationSectionContainer>
            <LatestItem />

    </HomeContainer>
    </Layout>
  )
}

export default Home;