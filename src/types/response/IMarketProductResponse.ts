import { firebaseTimestamp } from "../ITransactionHistory";

interface IMarketProductResponse {
    id: string,
    amount: number,
    name: string,
    photo: string,
    price: number,
    createdAt: firebaseTimestamp,
    deadline?: firebaseTimestamp,
    discordLink?: string,
    discordName?: string,
    twitterLink?: string,
    category: number,
    type: number,
    address?: string,
}
export default IMarketProductResponse;