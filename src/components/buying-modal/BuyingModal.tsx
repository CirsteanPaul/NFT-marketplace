import { id } from 'ethers/lib/utils';
import React, { useMemo, useState } from 'react'
import { useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../store';
import { setBlockchainTransactionStatus, spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { setMarketProductHowMuchAction, setMarketProductsShowModalAction, setMerketProductSelectedItemAction } from '../../store/actions/market-products-actions';
import { blockchainAccountSelector } from '../../store/selectors/blockchain-selectors';
import { contractInfoBalanceSelector } from '../../store/selectors/contract-info-selectors';
import { marketPlaceSelectedItemSelector, marketPlaceShowBuyingModalSelector } from '../../store/selectors/market-products-selectors';
import { BuyingContainer, BuyingTitle, BuyItemContainer, CloseButton, ContentContainer, DataContainer, HeaderContainer, InputAmount, modalStyles, Wrapper, StyledButton, SelectionContainer, InfoContainer, BuyButton } from './styles';


const BuyingModal = () => {
    const isOpen = useAppSelector(marketPlaceShowBuyingModalSelector);
    const dispatch = useAppDispatch();
    const [selectedAmount, setSelectedAmount] = useState(1);
    const balance = useAppSelector(contractInfoBalanceSelector);
    const accountAddress= useAppSelector(blockchainAccountSelector);
    const selectedProduct = useAppSelector(marketPlaceSelectedItemSelector);
    const nowDate = new Date(Date.now());
    const date = useMemo(() => selectedProduct?.deadline ? new Date(selectedProduct?.deadline) : new Date(Date.now()), [selectedProduct?.deadline]);
    const handleModalClose = () =>{
        dispatch(setMerketProductSelectedItemAction(null));
        dispatch(setMarketProductsShowModalAction(false));
    }
    const handleBuyClick = () =>{
        if(category === 2){
            if(selectedAmount < price)
           { Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Please bid more. You're amount is lower then the highest at the moment",
                customClass: { container: 'popup'}
                });
            return;
           }
            dispatch(spendTokensAsyncAction(selectedAmount));
        }
        else{
            dispatch(spendTokensAsyncAction(selectedAmount * price));
        }
        dispatch(setMarketProductHowMuchAction(selectedAmount));
        dispatch(setBlockchainTransactionStatus(1));
        dispatch(setMarketProductsShowModalAction(false));
    }
    useEffect(() =>{
        if(selectedProduct?.category === 2) setSelectedAmount(selectedProduct?.price + 1);
        return () => {
            setSelectedAmount(1);


        };
    },[isOpen])
    const handleInputChange = (e: any) =>{
        const value = e.target.value;
        const toInt = parseInt(value);
        if(!toInt) {
            setSelectedAmount(0);
            return;
        }
        if(toInt > balance) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Sorry you don't have enough tokens",
                customClass: { container: 'popup'}
                });
                return
            }
        setSelectedAmount(toInt);
    }
    
    if(!selectedProduct) {
        return null;
    }
    const { name, amount, price, category, deadline, address  } = selectedProduct;
    const handleMinusClick = () =>{
        if( selectedAmount === 1) return;
        setSelectedAmount(prev => prev - 1);
    }
    const handlePlusClick = () =>{
        if( selectedAmount + 1 > amount) return;
        if((selectedAmount + 1) * price > balance) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Sorry you don't have enough tokens",
                customClass: { container: 'popup'}
                });
            return;
        }
        setSelectedAmount(prev => prev + 1);
    }
  return (
    <Modal
        isOpen={isOpen}
        preventScroll
        contentLabel="buying modal"
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={modalStyles}
    >
        <Wrapper style={{width: "100%", display:'flex'}}>
        <HeaderContainer>
            <CloseButton onClick={handleModalClose}>Close</CloseButton>
            <InfoContainer>
            <DataContainer>{`Name: ${name}`}</DataContainer>
            {category === 2 ?<DataContainer>{`${amount} items`}</DataContainer> : <DataContainer>{`${amount} left`}</DataContainer>}
            {category === 2 ?<DataContainer>{`last bid: ${price} tokens`}</DataContainer> : <DataContainer>{`price per unit: ${price}`}</DataContainer>}
            {category === 2 ? <DataContainer>{`last bidder: ${address ? `${address.substring(0, 10)}...${address.substring(38, 44)}` : "no one"}`}</DataContainer> : <DataContainer style={{visibility: 'hidden'}}/>}
            {category === 2 ? <DataContainer style={{marginTop: '30px'}}>{date.toDateString()}</DataContainer> : <DataContainer style={{ visibility: 'hidden'}} />}
            </InfoContainer>
        </HeaderContainer>
        <ContentContainer>
            <BuyingContainer>
                <BuyingTitle>Buy the item</BuyingTitle>
                {category === 2 ? <>
                    <BuyingTitle style={{opacity: .8, fontSize: 15}}>How many tokens do you want to bid ?</BuyingTitle>
                <InputAmount value={selectedAmount} onChange={(e) =>handleInputChange(e)} placeholder = 'amount to bid...'></InputAmount>
                </> :

                    <BuyItemContainer>
                        <SelectionContainer>
                        <StyledButton onClick={handleMinusClick}>-</StyledButton>
                        {selectedAmount}
                        <StyledButton onClick={handlePlusClick}>+</StyledButton>
                        </SelectionContainer>
                        {`total cost: ${selectedAmount * price}`}
                    </BuyItemContainer>
                }
            </BuyingContainer>
            <BuyButton onClick={handleBuyClick}>Make purchase</BuyButton>
        </ContentContainer>
        </Wrapper>
    </Modal>
  )
}

export default BuyingModal