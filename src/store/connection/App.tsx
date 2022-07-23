import React from "react";
import { useState, useEffect } from "react";
import { onClickConnect, persistConnection, onClickDisconnect } from './ts/useMetamask'

const App = () => {
  const [balance, setBalance] = useState(0);
  const [currentAccount, setCurrentAccount] = useState("");
  const [chainId, setChainId] = useState(0);
  useEffect(() => {
    const persist = async () =>{
      const props =await persistConnection();
      if(!props) return
      console.log(props)
      setBalance(props.balance)
      setCurrentAccount(props.currentAccount);
      setChainId(props?.chainId)
    }
    persist();
    
  }, []);
  const handleConnect =async () => {
    const props =await onClickConnect("");
    if(!props) return
    if(props.balance)
    setBalance(props.balance)
    if(props.currentAccount)
    setCurrentAccount(props.currentAccount);
    if(props.chainId)
    setChainId(props.chainId);
  }
  const handleDisconnect = () => {
    const props = onClickDisconnect();
    console.log(props)
    
    setBalance(0)
    setCurrentAccount('');
    setChainId(0);
  }
  if (!currentAccount) {
    return <button onClick={handleConnect}>Connect</button>;
  }
  return (
    <>
      <p>{currentAccount}</p>
      <button onClick={handleDisconnect}>disconnect</button>
      <p>
        {balance} {chainId}
      </p>
    </>
  );
};
export default App;
