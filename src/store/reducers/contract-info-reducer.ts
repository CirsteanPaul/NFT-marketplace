import { createReducer } from "@reduxjs/toolkit";
import { setContractInfoBalance, setContractInfoLoading, setContractInfoOwner } from "../actions/contract-info-actions";

interface State {
    loading: boolean,
    balance: number;
    owner: string;

}
const initialState: State = {
    loading: false,
    balance: 0,
    owner: '',
}

const contractInfoReducer = createReducer(initialState, builder =>
    builder.addCase(setContractInfoLoading, (state, action) => ({ ...state, loading: action.payload}))
    .addCase(setContractInfoBalance, (state, action) => ({...state, balance: action.payload}))
    .addCase(setContractInfoOwner, (state, action) => ({...state, owner: action.payload})),
);
export default contractInfoReducer;