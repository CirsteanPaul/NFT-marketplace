import React from 'react'
import { LateItemData, LatestItemImage, LatestItemName, LatestItemPrice, LatestItemSectionContainer, LatestItemTitle, LatestItemTokenPrice } from './styles'

const LatestItem = () => {
  return (
    <LatestItemSectionContainer>
        <LatestItemTitle>Lastest Item</LatestItemTitle>
        <div style={{ position: "relative"}}>
        <LatestItemImage src = 'assets/placeholder.png'></LatestItemImage>
        <LateItemData>
            <LatestItemName>Latest item name</LatestItemName>
            <LatestItemPrice>Price</LatestItemPrice>
            <LatestItemTokenPrice>120 tokens</LatestItemTokenPrice>
        </LateItemData>
        </div>
    </LatestItemSectionContainer>
  )
}

export default LatestItem