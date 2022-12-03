import logo from '../logo.svg';

import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';

function Login() {
  const context = useContext(EscrowContext);

  useEffect(() => {
      console.log("EOA address", context.smartAccount);
  });

  const login = async () => {
    if(context.smartAccount == '0x'){
      context.loginWithBiconomy();
    }
  }

  const logout = async () => {
    if(context.smartAccount != '0x'){
      context.logout();
    }
  }

  return (
    <div className="App">
      {
        context.socialLoginSDK && <button 
        onClick={login}> {context.smartAccount == '0x' ? 'Login' : context.smartAccount}
        </button>
      }
      {
        context.smartAccount != '0x' && <div>
          <button onClick={logout}>Logout</button>
          {localStorage.getItem('name')}
          <img src={localStorage.getItem('profile_image')}></img>
        </div>
      }

      
    </div>
  );
}

export default Login;
