import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionsHistory, postNewTransaction } from "../../api/transaction-history-requests";
import { mapTransactionsHistory } from "../../mappers/transaction-history-mappers";
import ITransactionHistory from "../../types/ITransactionHistory";
import INewTransactionRequest from "../../types/requests/INewTransactionRequest";
import { TRANSACTIONS__SET, TRANSACTIONS__FETCH, TRANSACTIONS__SET_LOADING, TRANSACTIONS_POST_NEW_TRANSACTION } from "../constants";


export const setTransactionsLoading = createAction<boolean>(TRANSACTIONS__SET_LOADING);
export const setTransactionHistory = createAction<ITransactionHistory[]>(TRANSACTIONS__SET);

export const fetchDatabaseTransactionsHistory = createAsyncThunk(TRANSACTIONS__FETCH, async(__: never, thunkApi) => {
    thunkApi.dispatch(setTransactionsLoading(true))
    try {
        const response = await getTransactionsHistory();
        const transactionHistory = mapTransactionsHistory(response);
        thunkApi.dispatch(setTransactionHistory(transactionHistory));
    }
    catch(e){
        console.log(e)
        // swallow exception
    }
    finally {
        thunkApi.dispatch(setTransactionsLoading(false));
    }
});
export const postNewTransactionActionAsync = createAsyncThunk(TRANSACTIONS_POST_NEW_TRANSACTION, async( data: INewTransactionRequest, thunkApi) =>{
    try {
        await postNewTransaction(data);
    }
    catch (e){
        console.log(e);
        // swallow exception
    }
});