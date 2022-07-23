import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import SellingItem from '../../components/selling-item'
import Layout from '../../layout'
import { useAppSelector } from '../../store'
import { blockchainTransactionLoadingSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors'
import { MainSection, MarketPlaceContainer } from './styles'

const MarketPlace = () => {
    const transactionLoading = useAppSelector(blockchainTransactionLoadingSelector);
    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
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
  return (
    <Layout scrollable>
        <MainSection>
        <MarketPlaceContainer>
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem />
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem />
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem /> 
        <SellingItem /> 
        </MarketPlaceContainer>
        </MainSection>
    </Layout>
  )
}

export default MarketPlace