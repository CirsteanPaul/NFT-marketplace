import { firebaseTimestamp } from "../ITransactionHistory";

interface IMarketProductResponse {
    id: string,
    amount: number,
    name: string,
    photo: string,
    price: number,
    createdAt: firebaseTimestamp,
    deadline?: firebaseTimestamp,
    type: number,
    address?: string,
}
export default IMarketProductResponse;