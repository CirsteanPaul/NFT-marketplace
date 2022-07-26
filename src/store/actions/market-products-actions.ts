import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { storage } from "../../api";
import { deleteMarketProductRequest, getMarketProductsHistory as getMarketProducts, postNewCollection } from "../../api/market-products-requests";
import { mapAddNewCollection, mapMarketProducts } from "../../mappers/market-products-mappers";
import IMarketProduct from "../../types/IMarketProduct";
import IAddNewCollectionRequest from "../../types/requests/IAddNewCollectionRequest";
import checkInputData from "../../utils/checkInputData";
import {  MARKET_PRODUCTS__SET_LOADING, MARKET_PRODUCTS__SET, MARKET_PRODUCTS__FETCH, MARKET_PRODUCTS__DELETE, MARKET_PRODUCTS__ADD_NEW_COLLECTION } from "../constants";

export const setMarketProductsLoading = createAction<boolean>(MARKET_PRODUCTS__SET_LOADING);
export const setMarketProducts = createAction<IMarketProduct[]>(MARKET_PRODUCTS__SET);

export const fetchMarketProducts = createAsyncThunk(MARKET_PRODUCTS__FETCH, async(__: never, thunkApi) => {
    thunkApi.dispatch(setMarketProductsLoading(true))
    try {
        const response = await getMarketProducts();
        const marketProducts = mapMarketProducts(response);
        thunkApi.dispatch(setMarketProducts(marketProducts));
    }
    catch{
        // swallow exception
    }
    finally {
        thunkApi.dispatch(setMarketProductsLoading(false));
    }
});
export const deleteMarketProductActionAsync = createAsyncThunk(MARKET_PRODUCTS__DELETE, async(id: string, thunkApi) =>{
    try {
        const response = await deleteMarketProductRequest(id);
        thunkApi.dispatch(fetchMarketProducts());
    }catch{
        // swallow exception
    }
});
export const addNewCollectionActionAsync = createAsyncThunk(MARKET_PRODUCTS__ADD_NEW_COLLECTION, async(data : IAddNewCollectionRequest, thunkApi) =>{
    const {name, price, category, amount, type, imageToUpload} = data;
    const isValid = checkInputData({name, price, category, amount,type, imageToUpload});
        if(!isValid || !imageToUpload) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Data is wrong. Please check one more time!',
                });
            return;
        }
    thunkApi.dispatch(setMarketProductsLoading(true))
    try {
        const imageName = imageToUpload.name + v4()
        console.log(imageName,storage);
        const imageRef = ref(storage, `images/${imageName} `)   
        const response = await uploadBytes(imageRef, imageToUpload);
        const imageLink = await getDownloadURL(imageRef);
            
        console.log(imageLink)
        const realData = mapAddNewCollection(data);
        if(realData.type === 1){
            const request = {
                name: realData.name,
                amount: realData.amount,
                createdAt: new Date(Date.now()),
                photo: imageLink,
                category: realData.category,
                price: realData.price,
                type: realData.type,
            }
            await postNewCollection(request);
        }
        else{
            const request = {
                name: realData.name,
                amount: realData.amount,
                createdAt: new Date(Date.now()),
                deadline: realData.startDate,
                category: realData.category,
                photo: imageLink,
                price: realData.price,
                type: realData.type,
            }
            await postNewCollection(request);
        }
        Swal.fire({
            icon: 'success',
            title: 'Item was addded!',
            });
    } catch{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            });
        // swallow exception
    }
    finally{
        thunkApi.dispatch(setMarketProductsLoading(false));
    }
});