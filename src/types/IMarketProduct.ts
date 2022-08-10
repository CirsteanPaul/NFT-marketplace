interface IMarketProduct {
    id: string,
    amount: number,
    name: string,
    photo: string,
    price: number,
    createdAt: number,
    deadline?: number,
    discordLink?: string,
    twitterLink?: string,
    discordName?: string,
    category: number,
    type: number,
    address?: string,
}
export default IMarketProduct;