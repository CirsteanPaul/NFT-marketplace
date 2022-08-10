interface IAddNewCollectionRequest {
    name: string,
    price: string,
    category: string,
    amount: string,
    discordLink?: string,
    twitterLink?: string,
    type: string,
    imageToUpload: File | null,
    startDate: Date,
}
export default IAddNewCollectionRequest