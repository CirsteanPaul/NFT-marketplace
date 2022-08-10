export interface firebaseTimestamp{
    nanoseconds: number,
    seconds: number,
}
interface ITransactionHistoryResponse {
    id: string,
    name: string,
    createdAt: firebaseTimestamp,
    amount: number,
    discordName: string,
    address: string,
    howMuch: number,
}
export default ITransactionHistoryResponse;