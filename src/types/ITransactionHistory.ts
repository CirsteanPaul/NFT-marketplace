export interface firebaseTimestamp{
    nanoseconds: number,
    seconds: number,
}
interface ITransactionHistory {
    id: string,
    name: string,
    createdAt: number,
    discordName?: string,
    amount: number,
    address: string,
    howMuch: number,
}
export default ITransactionHistory;