import  db  from './index';
import {collection, addDoc, getDocs, doc, deleteDoc, updateDoc} from 'firebase/firestore';
import IUpdateBidItemRequest from '../types/requests/IUpdateBidItemRequest';
import { mapMarketProducts } from '../mappers/market-products-mappers';

const collectionRef = collection(db, "market-products");

export const getMarketProductsHistory = async() =>{
    const data = await getDocs(collectionRef);
    const collections: any = data.docs.map((docs) =>({...docs.data(), id: docs.id})); 
    return collections;
}
export const deleteMarketProductRequest = async(id: string) =>{
    const response = await deleteDoc(doc(db, "market-products", id));
    console.log(response)
}
export const postNewCollection = async(data: any) =>{
    const response = await addDoc(collectionRef, data);
    return response;
}
export const updateBidItemRequest = async(data: IUpdateBidItemRequest) =>{
    const bidItemDoc = doc(db, "market-products", data.id) ;
    await updateDoc(bidItemDoc, {address : data.accountAddress, price: data.howMuch});
}
export const updateSellingItemRequest = async(data: IUpdateBidItemRequest) =>{
    const sellItemDoc = doc(db, "market-products", data.id) ;
    const collections: any = await getMarketProductsHistory();
    const items = mapMarketProducts(collections);
    const item =  items.filter( x=> x.id === data.id)[0];
    const newAmount = item.amount - data.howMuch;
    await updateDoc(sellItemDoc, {amount : newAmount});
}