import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import SellingItem from '../../components/selling-item'
import Layout from '../../layout'
import { useAppDispatch, useAppSelector } from '../../store'
import { fetchMarketProducts } from '../../store/actions/market-products-actions'
import { blockchainTransactionLoadingSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors'
import {  marketPlaceLoadingSelector, marketPlaceMerchItemsSelector, marketPlaceNFTItemsSelector, marketPlaceOthersItemsSelector, marketPlaceSortedByDateItemsSelector, marketPlaceWlSpotsItemsSelector } from '../../store/selectors/market-products-selectors'
import { MainSection, MarketPlaceContainer } from './styles'

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
    const shownMarketProducts = useMemo(() =>{
        if(location.pathname === "/market-place")
            return wlSpots;
        else if(location.pathname === '/nfts')
            return nfts;
        else if(location.pathname === '/merchs')
            return merchs;
        else if(location.pathname === '/others')
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
    },[transactionStatus]);
    if(marketPlaceLoading)
        return <Layout></Layout>
  return (
    <Layout scrollable>
        <MainSection>
        <MarketPlaceContainer>
        {shownMarketProducts.map( product => <SellingItem key={product.id} product={product}/>)}

        </MarketPlaceContainer>
        </MainSection>
    </Layout>
  )
}

export default MarketPlace