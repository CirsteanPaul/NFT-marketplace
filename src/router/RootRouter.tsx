import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Home from "../modules/home";
import MarketPlace from "../modules/market";
import TransactionPage from "../modules/transaction-page";
import AuthRoute from "./AuthRoute";

const RootRouter = (): JSX.Element =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="nfts" element={<MarketPlace />} />
            <Route path="merchs" element={<MarketPlace />} />
            <Route path="others" element={<MarketPlace />} />
            <Route path="dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
            <Route path="transactions" element={<AuthRoute><TransactionPage /></AuthRoute>} />
            <Route path="*" element={<div>NotFound</div>}></Route>
        </Routes>
    </BrowserRouter>
    );
}
export default RootRouter;