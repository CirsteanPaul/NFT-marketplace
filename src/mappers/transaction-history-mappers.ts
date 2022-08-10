import { isArray, toNumber, toString } from "lodash";
import ITransactionHistory from "../types/ITransactionHistory";
import ITransactionHistoryResponse from "../types/response/ITransactionHistoryResponse";


export const mapTransactionsHistory = (data: ITransactionHistoryResponse[]): ITransactionHistory[] =>{
    if(!isArray(data)) return [];
    return data.map(transaction => mapTransactions(transaction));
}
export const mapTransactions = (transaction : ITransactionHistoryResponse): ITransactionHistory => ({
    id: toString(transaction?.id),
    name: toString(transaction?.name),
    amount: toNumber(transaction?.amount),
    createdAt: toNumber(transaction?.createdAt.seconds * 1000),
    discordName: toString(transaction?.discordName) || '',
    address: toString(transaction?.address),
    howMuch: toNumber(transaction?.howMuch),
});