import  db  from './index';
import {collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';

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