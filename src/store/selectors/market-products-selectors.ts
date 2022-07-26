import { RootState } from "..";
import marketProductsAdapter from "../adaptors/market-products";


const marketProdcutsSelectors = marketProductsAdapter.getSelectors(( state: RootState) => state.marketProducts);

export const marketPlaceLoadingSelector = (state: RootState) => state.marketProducts.loading;
export const marketPlaceItemsSelector = (state: RootState) => marketProdcutsSelectors.selectAll(state);

export const marketPlaceSortedByDateItemsSelector = (state: RootState) =>{
    const transactions = marketPlaceItemsSelector(state);
    return [...transactions].sort((a, b) => a.createdAt - b.createdAt);
}
export const marketPlaceWlSpotsItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 1);
}
export const marketPlaceNFTItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 2);
}
export const marketPlaceMerchItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 3);
}
export const marketPlaceOthersItemsSelector = (state: RootState) =>{
    const marketProducts=  marketPlaceSortedByDateItemsSelector(state);
    return marketProducts.filter(wlSpot => wlSpot.type === 4);
}
