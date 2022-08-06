
import  db  from './index';
import {collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';
import IMarketProduct from '../types/IMarketProduct';

const collectionRef = collection(db, "latest-item");

export const addLastetCollection = async(data: any) =>{
    const response = await addDoc(collectionRef, data);
    return response;
}
export const getLatestItem = async() =>{
    const data = await getDocs(collectionRef);
    const collections: any = data.docs.map((docs) =>({...docs.data(), id: docs.id})); 
    return collections;
}
export const deleteLatestItem = async(data: IMarketProduct) =>{
    const response = await deleteDoc(doc(db, "latest-item", data.id));
    console.log(response)
}