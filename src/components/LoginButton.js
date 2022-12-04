import {EscrowContext} from '../context/EscrowContext';
import { useContext } from 'react';

function LoginButton(){
    const context = useContext(EscrowContext);
    
    return <button className='login' onClick={context.loginWithBiconomy}>Login With Biconomy</button>
}

export default LoginButton;