import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { RootState } from "..";
import { onClickConnect } from "../connection/ts/useMetamask";
import { BLOCKCHAIN__SET_CONTRACT, BLOCKCHAIN__SET_LOADING, BLOCKCHAIN__SPEND_TOKENS, BLOCKCHAIN__SET_PROVIDER, BLOCKCHAIN__FETCH, BLOCKCHAIN__SET_ACCOUNT, BLOCKCHAIN__DISCONNECT, BLOCKCHAIN__SET_IS_CONNECTED, BLOCKCHAIN__SET_TRANSACTION_LOADING, BLOCKCHAIN__SET_TRANSACTION_STATUS} from "../constants";
import { blockchainContractSelector } from "../selectors/blockchain-selectors";
import { fecthContractInfo, setContractInfoBalance, setContractInfoOwner } from "./contract-info-actions";


export const setBlockchainLoading = createAction<boolean>(BLOCKCHAIN__SET_LOADING);
export const setBlockchainContract = createAction<ethers.Contract>(BLOCKCHAIN__SET_CONTRACT);
export const setBlockchainProvider = createAction<any>(BLOCKCHAIN__SET_PROVIDER);
export const setBlockchainAccount = createAction<string>(BLOCKCHAIN__SET_ACCOUNT);
export const setBlockchainIsConnected = createAction<boolean>(BLOCKCHAIN__SET_IS_CONNECTED);
export const setBlockchainTransactionStatus = createAction<number>(BLOCKCHAIN__SET_TRANSACTION_STATUS);
export const setBlockchainTransactionLoading = createAction<boolean>(BLOCKCHAIN__SET_TRANSACTION_LOADING);

export const disconnectBlockchainInfo = createAsyncThunk(BLOCKCHAIN__DISCONNECT, (__: never, thunkApi) =>{
    thunkApi.dispatch(setBlockchainAccount(''));
    thunkApi.dispatch(setContractInfoBalance(0));
    thunkApi.dispatch(setContractInfoOwner(''));
    thunkApi.dispatch(setBlockchainIsConnected(false));
    // reset data values
});
export const fecthBlockchainInfoAsyncAction = createAsyncThunk(BLOCKCHAIN__FETCH, async( __: never, thunkApi) =>{
    thunkApi.dispatch(setBlockchainLoading(true));
    try{
        const data = await onClickConnect('');
        if(data?.provider && data?.balanceContract){
            thunkApi.dispatch(setBlockchainIsConnected(true))
            thunkApi.dispatch(setBlockchainContract(data.balanceContract));
            thunkApi.dispatch(setBlockchainProvider(data.provider));
            thunkApi.dispatch(setBlockchainAccount(data.currentAccount));
            thunkApi.dispatch(fecthContractInfo());
        }
        
    }catch{
        // swallow exception
    }
    finally{
        thunkApi.dispatch(setBlockchainLoading(false));
    }
});
export const spendTokensAsyncAction = createAsyncThunk(BLOCKCHAIN__SPEND_TOKENS, async(data: number, thunkApi) =>{
    const contract = blockchainContractSelector(thunkApi.getState() as RootState);
    thunkApi.dispatch(setBlockchainTransactionLoading(true));
    try{
        const priceInWei = ethers.utils.parseUnits(data.toString(), 'wei');
        console.log(priceInWei);
        if(contract){
            const tx = await contract.spendToken(priceInWei);
            tx.wait()
            thunkApi.dispatch(fecthContractInfo());
            thunkApi.dispatch(setBlockchainTransactionStatus(1));
        }
    }
    catch {
        thunkApi.dispatch(setBlockchainTransactionStatus(-1));
        // swallow exception
    }
    finally {
        thunkApi.dispatch(setBlockchainTransactionLoading(false));
    }
});