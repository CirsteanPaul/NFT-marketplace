import { createReducer } from "@reduxjs/toolkit";
import { setMarketProducts, setMarketProductsLoading } from "../actions/market-products-actions";
import marketProductsAdapter from "../adaptors/market-products";


interface State {
    loading: boolean,
}
const initialState: State = {
    loading: false,
}

const marketProductsReducer = createReducer(marketProductsAdapter.getInitialState(initialState), builder =>
    builder.addCase(setMarketProductsLoading, (state, action) => ({ ...state, loading: action.payload}))
    .addCase(setMarketProducts, marketProductsAdapter.setAll)

);
export default marketProductsReducer;