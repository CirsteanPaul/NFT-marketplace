import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DATABASE__FETCH_TRANSACTIONS, DATABASE__SET_LOADING } from "../constants";
import { fetchDatabaseTransactionsHistory } from "./transaction-actions";


export const setDatabaseLoading = createAction<boolean>(DATABASE__SET_LOADING);

export const fetchDatabaseTransactions = createAsyncThunk(DATABASE__FETCH_TRANSACTIONS, async(__: never, thunkApi) => {
    thunkApi.dispatch(setDatabaseLoading(true))
    try {
        thunkApi.dispatch(fetchDatabaseTransactionsHistory());
    }
    catch{
        // swallow exception
    }
    finally {
        thunkApi.dispatch(setDatabaseLoading(false));
    }
});