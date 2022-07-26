import { createEntityAdapter } from "@reduxjs/toolkit";
import IMarketProduct from "../../types/IMarketProduct";


const marketProductsAdapter = createEntityAdapter<IMarketProduct>({
    selectId: markeProduct =>markeProduct.id,  
});
export default marketProductsAdapter;