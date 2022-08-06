import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../store';
import { setBlockchainTransactionStatus, spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { deleteMarketProductActionAsync, setMarketProducts, setMarketProductsShowModalAction, setMerketProductSelectedItemAction, updateSellingItemActionAsync } from '../../store/actions/market-products-actions';
import { postNewTransactionActionAsync } from '../../store/actions/transaction-actions';
import { blockchainAccountSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';
import { marketPlaceHowMuchSelector, marketPlaceSelectedItemSelector } from '../../store/selectors/market-products-selectors';
import IMarketProduct from '../../types/IMarketProduct';
import { ButtonsSection, BuyButton, DeleteButton, LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTokenPrice } from './styles'
type Props = {
    product: IMarketProduct;
}
const SellingItem = (props: Props) => {
    const {amount, photo, price, name, id } = props.product;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
    const accountAddress= useAppSelector(blockchainAccountSelector);
    const howMuch = useAppSelector(marketPlaceHowMuchSelector);
    const selectedItem = useAppSelector(marketPlaceSelectedItemSelector);

    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
    const handleDeleteClick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  dispatch(deleteMarketProductActionAsync(id));
                  Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
            }
          })
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
        if(transactionStatus === 1 && selectedItem?.id === props.product.id){
        const sendTransaction = async() =>{

        await dispatch(updateSellingItemActionAsync({howMuch, id}))
        
        await dispatch(postNewTransactionActionAsync({
            address: accountAddress,
            amount: price,
            name,
            howMuch,
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
            <LatestItemPrice>{`supply: ${amount}`}</LatestItemPrice>
            <LatestItemTokenPrice>{`price: ${price} tokens`}</LatestItemTokenPrice>
            <ButtonsSection>
            {isAdmin && <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>}
            <BuyButton onClick ={handleBuyClick}>Buy</BuyButton>
            </ButtonsSection>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default SellingItem;