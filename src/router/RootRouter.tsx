import { BrowserRouter, Routes, Route } from "react-router-dom";
import { dashboardPage, mainPage, merchPage, nftPage, otherPage, transactionPage, wlSpotsPage } from "../constants/routing";
import Dashboard from "../modules/dashboard";
import Home from "../modules/home";
import MarketPlace from "../modules/market";
import TransactionPage from "../modules/transaction-page";
import AuthRoute from "./AuthRoute";

const RootRouter = (): JSX.Element =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path={mainPage} element={<Home />}></Route>
            
            <Route path={wlSpotsPage} element={<MarketPlace />} />
            <Route path={nftPage} element={<MarketPlace />} />
            <Route path={merchPage} element={<MarketPlace />} />
            <Route path={otherPage} element={<MarketPlace />} />
            <Route path={dashboardPage} element={<AuthRoute><Dashboard /></AuthRoute>} />
            <Route path={transactionPage} element={<AuthRoute><TransactionPage /></AuthRoute>} />
            <Route path="*" element={<div>NotFound</div>}></Route>
        </Routes>
    </BrowserRouter>
    );
}
export default RootRouter;