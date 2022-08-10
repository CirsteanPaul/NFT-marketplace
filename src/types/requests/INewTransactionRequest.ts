interface INewTransactionRequest{
    address: string,
    amount: number,
    createdAt: Date,
    name: string,
    discordName: string,
    howMuch: number,
}
export default INewTransactionRequest;