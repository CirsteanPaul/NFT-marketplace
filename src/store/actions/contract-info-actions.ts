import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { RootState } from "..";
import { CONTRACT_INFO__FETCH, CONTRACT_INFO__SET_BALANCE, CONTRACT_INFO__SET_LOADING, CONTRACT_INFO__SET_OWNER } from "../constants";
import { blockchainAccountSelector, blockchainContractSelector } from "../selectors/blockchain-selectors";


export const setContractInfoBalance = createAction<number>(CONTRACT_INFO__SET_BALANCE);
export const setContractInfoLoading = createAction<boolean>(CONTRACT_INFO__SET_LOADING);
export const setContractInfoOwner = createAction<string>(CONTRACT_INFO__SET_OWNER);

export const fecthContractInfo = createAsyncThunk(CONTRACT_INFO__FETCH, async(__: never, thunkApi) =>{
    const account = blockchainAccountSelector(thunkApi.getState() as RootState);
    const contract = blockchainContractSelector(thunkApi.getState() as RootState);
    thunkApi.dispatch(setContractInfoLoading(true));
    try {
        if(contract)
        {
            let balance = await contract.balanceOf(account);
            const owner = await contract.owner();
            const trueBalance = ethers.utils.formatEther(balance);
            thunkApi.dispatch(setContractInfoBalance(parseInt(trueBalance)));
            thunkApi.dispatch(setContractInfoOwner(owner));
        }
    }
    catch(e){
        console.log(e);
        // swallow exception
    }
    finally{
        thunkApi.dispatch(setContractInfoLoading(false));
    }
});