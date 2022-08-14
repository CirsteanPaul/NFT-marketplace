import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../store";
import { blockchainIsConnectedSelector } from "../store/selectors/blockchain-selectors";
import { contractInfoIsAdminSelector } from "../store/selectors/contract-info-selectors";
interface AuthRouteProps {
    children: any;
}
const AuthRoute = ({children}: AuthRouteProps) =>{
    const navigate = useNavigate();
    const isAdmin = useAppSelector(contractInfoIsAdminSelector);
    const isConnected = useAppSelector(blockchainIsConnectedSelector);
    useEffect(() =>{
        if(!isConnected || !isAdmin ) {
            navigate('/');
            
         }
    },[isAdmin, isConnected, navigate])
    if(!isConnected || !isAdmin) return null;
    return children
}
export default AuthRoute;