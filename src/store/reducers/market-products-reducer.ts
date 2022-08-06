import { createReducer } from "@reduxjs/toolkit";
import IMarketProduct from "../../types/IMarketProduct";
import { setMarketProductLatestItem, setMarketProductHowMuchAction, setMarketProducts, setMarketProductsLoading, setMarketProductsShowModalAction, setMerketProductSelectedItemAction } from "../actions/market-products-actions";
import marketProductsAdapter from "../adaptors/market-products";


interface State {
    loading: boolean,
    latestItem: IMarketProduct | null,
    selectedItem: IMarketProduct | null,
    showModal: boolean,
    howMuch: number,
}
const initialState: State = {
    loading: false,
    latestItem: null,
    selectedItem: null,
    showModal: false,
    howMuch: 0,
}

const marketProductsReducer = createReducer(marketProductsAdapter.getInitialState(initialState), builder =>
    builder.addCase(setMarketProductsLoading, (state, action) => ({ ...state, loading: action.payload}))
    .addCase(setMarketProducts, marketProductsAdapter.setAll)
    .addCase(setMarketProductLatestItem, (state, action) => ({ ...state, latestItem: action.payload}))
    .addCase(setMerketProductSelectedItemAction, (state, action) => ({ ...state, selectedItem: action.payload}))
    .addCase(setMarketProductsShowModalAction, (state, action) => ({ ...state, showModal: action.payload}))
    .addCase(setMarketProductHowMuchAction, (state, action) => ({ ...state, howMuch: action.payload})),

);
export default marketProductsReducer;