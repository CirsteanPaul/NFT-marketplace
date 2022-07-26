import { createEntityAdapter } from "@reduxjs/toolkit";
import ITransactionHistory from "../../types/ITransactionHistory";


const transactionsAdapter = createEntityAdapter<ITransactionHistory>({
    selectId: transaction =>transaction.id,  
});
export default transactionsAdapter;