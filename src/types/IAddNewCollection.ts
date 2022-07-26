interface IAddNewCollection {
    name: string,
    price: number,
    category: number,
    amount: number,
    type: number,
    imageToUpload: File | null,
    startDate: Date,
}
export default IAddNewCollection