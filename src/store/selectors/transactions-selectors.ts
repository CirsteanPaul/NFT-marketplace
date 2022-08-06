import { RootState } from "..";
import transactionsAdapter from "../adaptors/transactions-adaptor";


const transactionSelectors = transactionsAdapter.getSelectors(( state: RootState) => state.transactions);

export const transactionLoadingSelector = (state: RootState) => state.transactions.loading;
export const transactionItemsSelector = (state: RootState) => transactionSelectors.selectAll(state);

export const transactionSortedByDateItemsSelector = (state: RootState) =>{
    const transactions = transactionItemsSelector(state);
    return [...transactions].sort((a,b) => b.createdAt - a.createdAt);
}