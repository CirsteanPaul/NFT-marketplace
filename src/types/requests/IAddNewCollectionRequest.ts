interface IAddNewCollectionRequest {
    name: string,
    price: string,
    category: string,
    amount: string,
    type: string,
    imageToUpload: File | null,
    startDate: Date,
}
export default IAddNewCollectionRequest