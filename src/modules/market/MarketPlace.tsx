import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import BidItem from '../../components/bid-item'
import BuyingModal from '../../components/buying-modal'
import SellingItem from '../../components/selling-item'
import { merchPage, nftPage, otherPage, wlSpotsPage } from '../../constants/routing'
import Layout from '../../layout'
import { useAppDispatch, useAppSelector } from '../../store'
import { setBlockchainTransactionStatus } from '../../store/actions/blockchain-actions'
import { fetchMarketProducts } from '../../store/actions/market-products-actions'
import { blockchainTransactionLoadingSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors'
import {  marketPlaceLoadingSelector, marketPlaceMerchItemsSelector, marketPlaceNFTItemsSelector, marketPlaceOthersItemsSelector, marketPlaceSortedByDateItemsSelector, marketPlaceWlSpotsItemsSelector } from '../../store/selectors/market-products-selectors'
import { MainSection, MarketPlaceContainer, PageTitle } from './styles'

const MarketPlace = () => {
    const location = useLocation();
    const transactionLoading = useAppSelector(blockchainTransactionLoadingSelector);
    const dispatch = useAppDispatch();
    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
    const marketPlaceLoading = useAppSelector(marketPlaceLoadingSelector);
    const nfts = useAppSelector(marketPlaceNFTItemsSelector);
    const wlSpots = useAppSelector(marketPlaceWlSpotsItemsSelector);
    const merchs = useAppSelector(marketPlaceMerchItemsSelector);
    const others = useAppSelector(marketPlaceOthersItemsSelector);
    useEffect(() =>{
        dispatch(fetchMarketProducts());

    },[dispatch]);
    const titleMarket = useMemo(() =>{
        if(location.pathname === wlSpotsPage)
        return 'WL spots';
    else if(location.pathname === nftPage)
        return "NFTS";
    else if(location.pathname === merchPage)
        return "Merch";
    else if(location.pathname === otherPage)
        return "RockVerse";
    else return "Unknown";
    },[location.pathname]);
    const shownMarketProducts = useMemo(() =>{
        if(location.pathname === wlSpotsPage)
            return wlSpots;
        else if(location.pathname === nftPage)
            return nfts;
        else if(location.pathname === merchPage)
            return merchs;
        else if(location.pathname === otherPage)
            return others;
        else return [];
    }, [location.pathname, wlSpots, merchs, others, nfts])
    useEffect(() =>{
        if(transactionLoading){
            Swal.fire({
            title: `You're transaction is being mined!`,
                icon: 'info',
                allowEscapeKey: false,
                timer: 10000000,
                allowOutsideClick: false,
                didOpen: () =>{
                    Swal.showLoading();
                }
            });
        }
        else{
            Swal.close();
        }
    },[transactionLoading])
    useEffect(() =>{
        if(transactionStatus === 1){
            Swal.fire({
                icon: 'success',
                title: 'Your purchase has been completed!',
                });
        }
        else if(transactionStatus === -1){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                });
        }
        dispatch(setBlockchainTransactionStatus(0));
    },[transactionStatus]);
    if(marketPlaceLoading)
        return <Layout></Layout>
  return (
    <Layout scrollable>
        <MainSection>
        <BuyingModal />
            <PageTitle>{titleMarket}</PageTitle>
        <MarketPlaceContainer>
        {shownMarketProducts.map( product => product.category === 1 ?<SellingItem key={product.id} product={product}/>
        : <BidItem key={product.id} product={product}></BidItem>)}

        </MarketPlaceContainer>
        </MainSection>
    </Layout>
  )
}

export default MarketPlace