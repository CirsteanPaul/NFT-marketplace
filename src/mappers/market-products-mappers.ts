import { isArray, toNumber, toString } from "lodash";
import IAddNewCollection from "../types/IAddNewCollection";
import IMarketProduct from "../types/IMarketProduct";
import IAddNewCollectionRequest from "../types/requests/IAddNewCollectionRequest";
import IMarketProductResponse from "../types/response/IMarketProductResponse";

export const mapMarketProducts = (data: IMarketProductResponse[]): IMarketProduct[] =>{
    if(!isArray(data)) return [];
    return data.map(marketProduct => mapProduct(marketProduct));
}
export const mapProduct = (marketProduct : IMarketProductResponse): IMarketProduct => ({
    id: toString(marketProduct?.id),
    name: toString(marketProduct?.name),
    amount: toNumber(marketProduct?.amount),
    createdAt: toNumber(marketProduct?.createdAt.seconds * 100),
    photo: toString(marketProduct?.photo),
    price: toNumber(marketProduct?.price),
    deadline: toNumber(marketProduct?.deadline  ? marketProduct?.deadline?.seconds * 1000 : 0) ,
    address: toString(marketProduct?.address),
    type: toNumber(marketProduct?.type),
    category: toNumber(marketProduct?.category),
});
export const mapAddNewCollection = (collection : IAddNewCollectionRequest): IAddNewCollection => ({
    name: toString(collection?.name),
    price: toNumber(collection?.price),
    category: toNumber(collection?.category),
    amount: toNumber(collection?.amount),
    type: toNumber(collection?.type),
    imageToUpload: collection?.imageToUpload,
    startDate: collection?.startDate
});