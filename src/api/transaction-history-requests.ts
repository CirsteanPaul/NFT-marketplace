import  db  from './index';
import {addDoc, collection, getDocs} from 'firebase/firestore';
import INewTransactionRequest from '../types/requests/INewTransactionRequest';

const collectionRef = collection(db, "transactions");

export const getTransactionsHistory = async() =>{
    const data = await getDocs(collectionRef);
    const collections: any = data.docs.map((docs) =>({...docs.data(), id: docs.id})); 
    return collections;
}
export const postNewTransaction = async(data: INewTransactionRequest) =>{
    const response = await addDoc(collectionRef, data);
    return response;
}