import {EscrowContext} from '../context/EscrowContext';
import { useContext } from 'react';

function LoginButton(){
    const context = useContext(EscrowContext);
    
    return <button onClick={context.loginWithBiconomy}>Login</button>
}

export default LoginButton;