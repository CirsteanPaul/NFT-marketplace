interface IAddNewCollection {
    name: string,
    price: number,
    category: number,
    amount: number,
    type: number,
    discordLink?: string,
    twitterLink?: string,
    imageToUpload: File | null,
    startDate: Date,
}
export default IAddNewCollection