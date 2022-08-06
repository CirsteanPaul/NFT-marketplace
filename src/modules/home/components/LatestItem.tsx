import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../store'
import { marketPlaceLatestItemSelector } from '../../../store/selectors/market-products-selectors'
import { LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTitle, LatestItemTokenPrice } from './styles'

const LatestItem = () => {
    const latestItem = useAppSelector(marketPlaceLatestItemSelector);
    const navigate = useNavigate();
    const handleClick = () =>{
        if(latestItem?.type === 1)
            navigate('/market-place');
        else if(latestItem?.type === 2)
            navigate('/merchs');
        else if(latestItem?.type === 3)
            navigate('/nfts');
        else navigate('/others');
    }
    if(!latestItem) return null;
  return (
    <LatestItemSectionContainer onClick={handleClick}>
        <LatestItemTitle>Latest Item</LatestItemTitle>
        <div style={{ position: "relative"}}>
        <LatestItemImage src = {latestItem.photo}></LatestItemImage>
        <LateItemData>
            <LatestItemName>{latestItem.name}</LatestItemName>
            <LatestItemPrice>Price</LatestItemPrice>
            <LatestItemTokenPrice>{`${latestItem.price} tokens`}</LatestItemTokenPrice>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default LatestItem