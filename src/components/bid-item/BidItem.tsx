import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setBlockchainTransactionStatus, spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { deleteMarketProductActionAsync } from '../../store/actions/market-products-actions';
import { postNewTransactionActionAsync } from '../../store/actions/transaction-actions';
import { blockchainAccountSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';
import IMarketProduct from '../../types/IMarketProduct';
import { ButtonsSection, BuyButton, DeleteButton, LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTokenPrice } from './styles'
type Props = {
    product: IMarketProduct;
}
const BidItem = (props: Props) => {
    const {amount, photo, price, name, id } = props.product;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
    const accountAddress= useAppSelector(blockchainAccountSelector);
    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
    const handleDeleteClick = () => {
        dispatch(deleteMarketProductActionAsync(id));
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
            <LatestItemName>{name}</LatestItemName>
            <LatestItemPrice>{`${amount} left`}</LatestItemPrice>
            <LatestItemTokenPrice>{`${price} tokens`}</LatestItemTokenPrice>
            <ButtonsSection>
            {isAdmin && <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>}
            <BuyButton onClick ={ () => dispatch(spendTokensAsyncAction(price))}>Buy</BuyButton>
            </ButtonsSection>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default BidItem;