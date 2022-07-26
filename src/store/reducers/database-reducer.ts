import { createReducer } from "@reduxjs/toolkit";
import { setDatabaseLoading } from "../actions/database-actions";

interface State {
    loading: boolean,
}
const initialState: State = {
    loading: false,
}

const databaseReducer = createReducer(initialState, builder =>
    builder.addCase(setDatabaseLoading, (state, action) => ({ ...state, loading: action.payload})),

);
export default databaseReducer;