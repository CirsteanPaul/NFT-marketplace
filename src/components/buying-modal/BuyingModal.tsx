import React, { useMemo } from 'react'
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '../../store';
import { setMarketProductsShowModalAction, setMerketProductSelectedItemAction } from '../../store/actions/market-products-actions';
import { marketPlaceSelectedItemSelector, marketPlaceShowBuyingModalSelector } from '../../store/selectors/market-products-selectors';
import { CloseButton, ContentContainer, DataContainer, HeaderContainer, modalStyles, Wrapper } from './styles';


const BuyingModal = () => {
    const isOpen = useAppSelector(marketPlaceShowBuyingModalSelector);
    const dispatch = useAppDispatch()
    const selectedProduct = useAppSelector(marketPlaceSelectedItemSelector);
    const nowDate = new Date(Date.now());
    const date = useMemo(() => selectedProduct?.deadline ? new Date(selectedProduct?.deadline) : new Date(Date.now()), [selectedProduct?.deadline]);
    const handleModalClose = () =>{
        dispatch(setMerketProductSelectedItemAction(null));
        dispatch(setMarketProductsShowModalAction(false));
    }
    if(!selectedProduct) {
        return null;
    }
    const { name, amount, price, category, deadline, address  } = selectedProduct;
  return (
    <Modal
        isOpen={isOpen}
        contentLabel="buying modal"
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={modalStyles}
    >
        <Wrapper style={{ height: "100%", width: "100%", display:'flex'}}>
        <HeaderContainer>
            <CloseButton onClick={handleModalClose}>Close</CloseButton>
            <DataContainer>{`Name: ${name}`}</DataContainer>
            {category === 2 ?<DataContainer>{`${amount} items`}</DataContainer> : <DataContainer>{`${amount} left`}</DataContainer>}
            {category === 2 ?<DataContainer>{`last bid: ${price} tokens`}</DataContainer> : <DataContainer>{`price per unit: ${price}`}</DataContainer>}
            {category === 2 && <DataContainer>{`last bidder: ${address ? `${address.substring(0, 10)}...${address.substring(38, 44)}` : "no one"}`}</DataContainer>}
            {category === 2 && <DataContainer style={{marginTop: '30px'}}>{date.toDateString()}</DataContainer>}
        </HeaderContainer>
        <ContentContainer>Content</ContentContainer>
        </Wrapper>
    </Modal>
  )
}

export default BuyingModal