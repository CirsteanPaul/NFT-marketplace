interface IMarketProduct {
    id: string,
    amount: number,
    name: string,
    photo: string,
    price: number,
    createdAt: number,
    deadline?: string,
    type: number,
    address?: string,
}
export default IMarketProduct;