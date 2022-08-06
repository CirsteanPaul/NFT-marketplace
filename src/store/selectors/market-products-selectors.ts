import { RootState } from "..";
import marketProductsAdapter from "../adaptors/market-products";


const marketProdcutsSelectors = marketProductsAdapter.getSelectors(( state: RootState) => state.marketProducts);

export const marketPlaceLoadingSelector = (state: RootState) => state.marketProducts.loading;
export const marketPlaceItemsSelector = (state: RootState) => marketProdcutsSelectors.selectAll(state);
export const marketPlaceLatestItemSelector = (state: RootState) => state.marketProducts.latestItem;
export const marketPlaceSelectedItemSelector = (state: RootState) => state.marketProducts.selectedItem;
export const marketPlaceShowBuyingModalSelector = (state: RootState) => state.marketProducts.showModal;
export const marketPlaceHowMuchSelector = (state: RootState) => state.marketProducts.howMuch;

export const marketPlaceSortedByDateItemsSelector = (state: RootState) =>{
    const transactions = marketPlaceItemsSelector(state);
    return [...transactions].sort((a, b) => b.createdAt - a.createdAt);
}
export const marketPlaceWlSpotsItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 1);
}
export const marketPlaceNFTItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 3);
}
export const marketPlaceMerchItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 2);
}
export const marketPlaceOthersItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 4);
}
