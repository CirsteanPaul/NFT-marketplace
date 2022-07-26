import { RootState } from "..";


export const databaseLoadingSelector = (state: RootState): boolean => state.database.loading;