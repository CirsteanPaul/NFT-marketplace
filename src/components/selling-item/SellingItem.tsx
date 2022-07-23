import { useAppDispatch, useAppSelector } from '../../store';
import { spendTokensAsyncAction } from '../../store/actions/blockchain-actions';
import { ButtonsSection, BuyButton, DeleteButton, LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTokenPrice } from './styles'

const SellingItem = () => {
    const dispatch = useAppDispatch();
  return (
    <LatestItemSectionContainer>
        <div style={{ position: "relative"}}>
        <LatestItemImage src = 'assets/placeholder.png'></LatestItemImage>
        <LateItemData>
            <LatestItemName>Latest item name</LatestItemName>
            <LatestItemPrice>Price</LatestItemPrice>
            <LatestItemTokenPrice>120 tokens</LatestItemTokenPrice>
            <ButtonsSection>
            <DeleteButton>Delete</DeleteButton>
            <BuyButton onClick ={ () => dispatch(spendTokensAsyncAction(0))}>Buy</BuyButton>
            </ButtonsSection>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default SellingItem;