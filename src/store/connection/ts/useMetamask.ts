import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { switchNetwork } from "./switchNetwork";
import { Web3Provider } from "@ethersproject/providers";
import { networkId, networkName } from "./config";
import { MetamaskData } from "./contants";
import { connectSuccesfullPopup, noMetamaskPopup, somethingWentWrongPopup } from "./popups";
import { abi, contractAddress } from "./contract";
const addListeners = () => {
  const ethereum: any = window.ethereum;
  const provider = new ethers.providers.Web3Provider(ethereum, "any");
    ethereum.on('accountsChanged' , () =>{
      onClickDisconnect();
      window.location.reload();
    })
    provider.on("network", (newNetwork: any, oldNetwork: any) => {
      if (oldNetwork) {
        onClickDisconnect();
          window.location.reload();
      }
  });
}
export const persistConnection =async () => {
    var localAcc: string | null = localStorage.getItem("account");
    if (localAcc) {
        return await onClickConnect(localAcc);
    }
    return null;
  };
  const getProvider = async () => {
     const prov: any = await detectEthereumProvider();
        return prov;
};
  const handleEthereum =async () => {
    const { ethereum } = window;
    if (!(ethereum && ethereum.isMetaMask)) 
        {
         noMetamaskPopup(); 
        }
  }
const tryToConnect =async () =>{
    let provider: Web3Provider | null;
    try {
      provider =await getProvider();
    } catch {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true
      });
      provider = null;
    }
    finally {
        handleEthereum();
    }
    return provider;
 
};
const getContract =(provider: ethers.providers.Web3Provider, account: string): ethers.Contract =>{
    const acc = provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, acc);
    contract.connect(acc);
    return contract;
}

const connectAccount =async (currentAccount: string) : Promise<MetamaskData | null> =>{
    let balance: number, chainId: number, chainName: string, balanceContract;
    const ethereum: any  = window.ethereum;
    let provider = new ethers.providers.Web3Provider(ethereum);
    try{
        const response = await provider.getNetwork();
        if(response.chainId !== networkId){
            await switchNetwork({provider, network: networkId});
        } 
        provider = new ethers.providers.Web3Provider(ethereum);
        
        chainId = networkId;
        chainName = networkName;
        const result = await provider.getBalance(currentAccount);
        balance = parseInt(result._hex, 16);
        connectSuccesfullPopup();
        balanceContract = getContract(provider, currentAccount);

        addListeners();
    }
    catch(e){
        console.log(e);
        somethingWentWrongPopup(networkName);
            return null;
    }
    return {currentAccount, balance, chainId, chainName, provider, balanceContract};
  };

 export const onClickConnect =async (currentAccount: string) : Promise<MetamaskData | null>=> {
    const provider: any =await tryToConnect();
    if(!provider) return null;
    window.removeEventListener('ethereum#initialized', handleEthereum);
    if(!currentAccount){
        try{
            const { result } =await provider.send("eth_requestAccounts", [])
            if (result.length > 0) {
                currentAccount = result[0];
                localStorage.setItem("account", result[0]);
        }    
    }
        catch(e: any){
          console.log(e)
        };
          
    }
    const props = await connectAccount(currentAccount);
    return props;

  };
export const onClickDisconnect = (): MetamaskData | null => {
    localStorage.setItem("account", "");
    return null;
  };