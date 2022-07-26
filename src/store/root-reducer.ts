import { combineReducers } from "@reduxjs/toolkit";
import blockchainReducer from "./reducers/blockchain-reducer";
import contractInfoReducer from "./reducers/contract-info-reducer";
import databaseReducer from "./reducers/database-reducer";
import marketProductsReducer from "./reducers/market-products-reducer";
import transactionReducer from "./reducers/transaction-reducer";

const rootReducer = combineReducers({
    blockchain: blockchainReducer,
    contractInfo: contractInfoReducer,
    database: databaseReducer,
    transactions: transactionReducer,
    marketProducts: marketProductsReducer
});
export default rootReducer;