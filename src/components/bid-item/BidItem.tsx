import { useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../store';
import { setBlockchainTransactionStatus, spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { deleteMarketProductActionAsync, setMarketProductsShowModalAction, setMerketProductSelectedItemAction } from '../../store/actions/market-products-actions';
import { postNewTransactionActionAsync } from '../../store/actions/transaction-actions';
import { blockchainAccountSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';
import IMarketProduct from '../../types/IMarketProduct';
import { ButtonsSection, BuyButton, DeleteButton, LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTokenPrice } from './styles'
type Props = {
    product: IMarketProduct;
}
const BidItem = (props: Props) => {
    const {amount, photo, price, name, id, deadline, address } = props.product;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
    const accountAddress= useAppSelector(blockchainAccountSelector);
    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
    const date = useMemo(() => deadline ? new Date(deadline) : new Date(Date.now()), [deadline]);
    const nowDate = new Date(Date.now());
    const handleDeleteClick = () => {
        dispatch(deleteMarketProductActionAsync(id));
    }
    const handleBuyClick = () =>{
        if(!accountAddress){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please connect with your wallet!',
                });
            return;
        }
        dispatch(setMerketProductSelectedItemAction(props.product));
        dispatch(setMarketProductsShowModalAction(true));
    }
    useEffect(() =>{
        if(transactionStatus === 1){
        const sendTransaction = async() =>{

        
        await dispatch(postNewTransactionActionAsync({
            address: accountAddress,
            amount: price,
            name,
            howMuch: 3,
            createdAt: new Date(Date.now()),
        }));
    }
        sendTransaction()
        dispatch(setBlockchainTransactionStatus(0));
    }
    },[transactionStatus]);
  return (
    <LatestItemSectionContainer>
        <div style={{ position: "relative"}}>
        <LatestItemImage src = {photo}></LatestItemImage>
        <LateItemData>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <LatestItemName>{name}</LatestItemName>
            <LatestItemPrice>{`${amount} bundle`}</LatestItemPrice>
            </div>
            <LatestItemTokenPrice>{`Last bid: ${price} tokens`}</LatestItemTokenPrice>
            {date > nowDate ? <LatestItemTokenPrice>{`Untill ${date.toDateString()}`}</LatestItemTokenPrice> : <LatestItemTokenPrice>{`Winner ${address?.substring(0,15)}`}</LatestItemTokenPrice>}
            <ButtonsSection>
            {isAdmin && <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>}
            <BuyButton onClick ={handleBuyClick}>Bid</BuyButton>
            </ButtonsSection>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default BidItem;