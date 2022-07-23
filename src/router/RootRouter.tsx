import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Home from "../modules/home";
import MarketPlace from "../modules/market";
import AuthRoute from "./AuthRoute";

const RootRouter = (): JSX.Element =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />}></Route>
            
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
            <Route path="*" element={<div>NotFound</div>}></Route>
        </Routes>
    </BrowserRouter>
    );
}
export default RootRouter;