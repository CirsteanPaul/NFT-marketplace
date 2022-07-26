import { createReducer } from "@reduxjs/toolkit";
import { setTransactionsLoading, setTransactionHistory } from "../actions/transaction-actions";
import transactionsAdapter from "../adaptors/transactions-adaptor";


interface State {
    loading: boolean,
}
const initialState: State = {
    loading: false,
}

const transactionReducer = createReducer(transactionsAdapter.getInitialState(initialState), builder =>
    builder.addCase(setTransactionsLoading, (state, action) => ({ ...state, loading: action.payload}))
    .addCase(setTransactionHistory, transactionsAdapter.setAll)

);
export default transactionReducer;