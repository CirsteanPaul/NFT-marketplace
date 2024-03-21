import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { storage } from "../../api";
import { addLastetCollection, deleteLatestItem, getLatestItem } from "../../api/latest-item-requests";
import { deleteMarketProductRequest, getMarketProductsHistory as getMarketProducts, postNewCollection, updateBidItemRequest, updateSellingItemRequest  } from "../../api/market-products-requests";
import { mapAddNewCollection, mapMarketProducts } from "../../mappers/market-products-mappers";
import IMarketProduct from "../../types/IMarketProduct";
import IAddNewCollectionRequest from "../../types/requests/IAddNewCollectionRequest";
import IUpdateBidItemRequest from "../../types/requests/IUpdateBidItemRequest";
import checkInputData from "../../utils/checkInputData";
import {  MARKET_PRODUCTS__SET_LOADING, MARKET_PRODUCTS__SET, MARKET_PRODUCTS__SET_DISCORD_NAME, MARKET_PRODUCTS__UPDATE_BID_ITEM, MARKET_PRODUCTS__SET_SELECTED, MARKET_PRODUCTS__SET_SHOW_MODAL, MARKET_PRODUCTS__FETCH, MARKET_PLACE__GET_LATEST_ITEM, MARKET_PRODUCTS__SET_LATEST_ITEM, MARKET_PRODUCTS__DELETE, MARKET_PRODUCTS__ADD_NEW_COLLECTION, MARKET_PLACE__SET_HOW_MUCH } from "../constants";

export const setMarketProductsLoading = createAction<boolean>(MARKET_PRODUCTS__SET_LOADING);
export const setMarketProducts = createAction<IMarketProduct[]>(MARKET_PRODUCTS__SET);
export const setMarketProductLatestItem = createAction<IMarketProduct>(MARKET_PRODUCTS__SET_LATEST_ITEM);
export const setMerketProductSelectedItemAction = createAction<IMarketProduct | null>(MARKET_PRODUCTS__SET_SELECTED);
export const setMarketProductsShowModalAction = createAction<boolean>(MARKET_PRODUCTS__SET_SHOW_MODAL);
export const setMarketProductsDiscordNameAction = createAction<string>(MARKET_PRODUCTS__SET_DISCORD_NAME);
export const setMarketProductHowMuchAction = createAction<number>(MARKET_PLACE__SET_HOW_MUCH);

export const getLatestItemAsyncAction = createAsyncThunk(MARKET_PLACE__GET_LATEST_ITEM, async(__: never, thunkApi) =>{
    thunkApi.dispatch(setMarketProductsLoading(true));
    try {
        const response = await getLatestItem();
        const latestItems = mapMarketProducts(response);
        if( latestItems.length){
            thunkApi.dispatch(setMarketProductLatestItem(latestItems[0]));
        }
    } catch {
        // swallow exception
    }
    finally {
        thunkApi.dispatch(setMarketProductsLoading(false));
    }
});
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
        await deleteMarketProductRequest(id);
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
        await uploadBytes(imageRef, imageToUpload);
        const imageLink = await getDownloadURL(imageRef);
            
        const realData = mapAddNewCollection(data);
        if(realData.category === 1){
            const request = {
                name: realData.name,
                amount: realData.amount,
                createdAt: new Date(Date.now()),
                photo: imageLink,
                category: realData.category,
                discordLink: realData.discordLink,
                twitterLink: realData.twitterLink,
                price: realData.price,
                type: realData.type,
            }
            await postNewCollection(request);
            const latestItem = await getLatestItem();
            await deleteLatestItem(latestItem[0]);
            await addLastetCollection(request);
        }
        else{
            const request = {
                name: realData.name,
                amount: realData.amount,
                createdAt: new Date(Date.now()),
                deadline: realData.startDate,
                category: realData.category,
                discordLink: realData.discordLink,
                twitterLink: realData.twitterLink,
                photo: imageLink,
                price: realData.price,
                type: realData.type,
            }
            await postNewCollection(request);
            const latestItem = await getLatestItem();
            await deleteLatestItem(latestItem[0]);
            await addLastetCollection(request);
        }
        Swal.fire({
            icon: 'success',
            title: 'Item was addded!',
            });
    } catch(e){
        console.log(e);
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
export const updateBidItemActionAsync = createAsyncThunk(MARKET_PRODUCTS__UPDATE_BID_ITEM, async(data: IUpdateBidItemRequest, thunkApi) =>{
    thunkApi.dispatch(setMarketProductsLoading(true))
    try{
        await updateBidItemRequest(data);
        thunkApi.dispatch(fetchMarketProducts());
    } 
    catch{
        // swallow exception
    }
    finally {
    thunkApi.dispatch(setMarketProductsLoading(false))
    }
});
export const updateSellingItemActionAsync = createAsyncThunk(MARKET_PRODUCTS__UPDATE_BID_ITEM, async(data: IUpdateBidItemRequest, thunkApi) =>{
    thunkApi.dispatch(setMarketProductsLoading(true))
    try{
        await updateSellingItemRequest(data);
        thunkApi.dispatch(fetchMarketProducts());
    } 
    catch{
        // swallow exception
    }
    finally {
    thunkApi.dispatch(setMarketProductsLoading(false))
    }
});