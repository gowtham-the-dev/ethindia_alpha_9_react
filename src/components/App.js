import logo from '../logo.svg';
import '../css/App.css';

import SocialLogin from "@biconomy/web3-auth";
import { useEffect } from 'react';
import { ethers } from "ethers";


function App() {

  const initBiconomy = async () => {
    const socialLoginSDK = new SocialLogin();
    await socialLoginSDK.init('0x5');
    socialLoginSDK.showConnectModal();
    socialLoginSDK.showWallet();

    if (!socialLoginSDK?.web3auth?.provider) return;
    const provider = new ethers.providers.Web3Provider(
        socialLoginSDK.web3auth.provider,
    );
    const accounts = await provider.listAccounts();
    console.log("EOA address", accounts)
  }

  useEffect(() => {
    initBiconomy();
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
