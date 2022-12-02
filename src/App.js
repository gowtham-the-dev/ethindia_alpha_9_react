import logo from './logo.svg';
import './App.css';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
