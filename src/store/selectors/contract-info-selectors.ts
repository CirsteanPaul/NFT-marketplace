import { RootState } from "..";
import { blockchainAccountSelector, blockchainIsConnectedSelector } from "./blockchain-selectors";


export const contractInfoBalanceSelector = (state: RootState): number => state.contractInfo.balance;
export const contractInfoOwnerSelector = (state: RootState): string => state.contractInfo.owner;
export const contractInfoLoadingSelector = (state: RootState): boolean => state.contractInfo.loading;

const otherAddresses = ['0x7c9ada7b2605b91796a121156fe03f71e7596ebb', '0x7461C9F02b32158FEbDd7200e3324Ae45860F125', '0x44D34a6d2A6F3b017b5607B6d1ea7c14807B14E7'];
export const contractInfoIsAdminSelector = (state: RootState): boolean =>{
    const owner = contractInfoOwnerSelector(state);
    const account = blockchainAccountSelector(state);
    const isConnected = blockchainIsConnectedSelector(state);
    if(!isConnected) return false;
    otherAddresses.forEach(address => {
        if(account.toLowerCase() === address.toLowerCase())
            return true;
    })
    return owner.toLowerCase() === account.toLowerCase();
};