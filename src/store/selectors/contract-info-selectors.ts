import { RootState } from "..";
import { blockchainAccountSelector, blockchainIsConnectedSelector } from "./blockchain-selectors";


export const contractInfoBalanceSelector = (state: RootState): number => state.contractInfo.balance;
export const contractInfoOwnerSelector = (state: RootState): string => state.contractInfo.owner;
export const contractInfoLoadingSelector = (state: RootState): boolean => state.contractInfo.loading;

export const contractInfoIsAdminSelector = (state: RootState): boolean =>{
    const owner = contractInfoOwnerSelector(state);
    const account = blockchainAccountSelector(state);
    const isConnected = blockchainIsConnectedSelector(state);
    if(!isConnected) return false;
    return owner === account;
};