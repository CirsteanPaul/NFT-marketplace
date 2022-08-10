import { useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../../store';
import { setBlockchainTransactionStatus, spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { deleteMarketProductActionAsync, setMarketProductsShowModalAction, setMerketProductSelectedItemAction, updateBidItemActionAsync } from '../../store/actions/market-products-actions';
import { postNewTransactionActionAsync } from '../../store/actions/transaction-actions';
import { blockchainAccountSelector, blockchainTransactionStatusSelector } from '../../store/selectors/blockchain-selectors';
import { contractInfoIsAdminSelector } from '../../store/selectors/contract-info-selectors';
import { marketPlaceDiscordNameSelector, marketPlaceHowMuchSelector, marketPlaceSelectedItemSelector } from '../../store/selectors/market-products-selectors';
import IMarketProduct from '../../types/IMarketProduct';
import { ButtonsSection, BuyButton, DeleteButton, LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTokenPrice, SocialContainer, SocialLinkButton } from './styles'
import { ReactComponent as Discord } from './discord.svg';
import { ReactComponent as Twitter } from './twitter.svg';

type Props = {
    product: IMarketProduct;
}
const BidItem = (props: Props) => {
    const {amount, photo, price, name, id, deadline, address, twitterLink, discordLink } = props.product;
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
    const accountAddress= useAppSelector(blockchainAccountSelector);
    const discordName = useAppSelector(marketPlaceDiscordNameSelector);
    const transactionStatus = useAppSelector(blockchainTransactionStatusSelector);
    const howMuch = useAppSelector(marketPlaceHowMuchSelector);
    const selectedItem = useAppSelector(marketPlaceSelectedItemSelector);
    const date = useMemo(() => deadline ? new Date(deadline) : new Date(Date.now()), [deadline]);
    const nowDate = new Date(Date.now());
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

        await dispatch(updateBidItemActionAsync({accountAddress, howMuch, id}))
        await dispatch(postNewTransactionActionAsync({
            address: accountAddress,
            amount: price,
            name,
            discordName,
            howMuch: howMuch,
            createdAt: new Date(Date.now()),
        }));
    }
        sendTransaction()
        dispatch(setMerketProductSelectedItemAction(null));
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
            <SocialContainer >
            {(discordLink || twitterLink) && <LatestItemPrice>Social links:</LatestItemPrice>}
              {twitterLink && <SocialLinkButton onClick={() => window.open(twitterLink, '_blank')}><Twitter /></SocialLinkButton>}
              {discordLink && <SocialLinkButton onClick={() => window.open(discordLink, '_blank')}><Discord /></SocialLinkButton>}
            </SocialContainer>
            <LatestItemTokenPrice>{`Last bid: ${price} tokens`}</LatestItemTokenPrice>
            {date > nowDate ? <LatestItemTokenPrice>{`Untill ${date.toDateString()}`}</LatestItemTokenPrice> : <LatestItemTokenPrice>{`Winner ${address?.substring(0,15)}`}</LatestItemTokenPrice>}
            <ButtonsSection>
            {isAdmin && <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>}
            {date > nowDate ? <BuyButton onClick ={handleBuyClick}>Bid</BuyButton> : <BuyButton disabled>Ended</BuyButton>}
            </ButtonsSection>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default BidItem;