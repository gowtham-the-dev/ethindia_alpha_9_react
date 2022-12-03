import { EscrowContext } from '../context/EscrowContext';
import { useContext } from 'react';

function LogoutButton(){
    const context = useContext(EscrowContext);

    return <button onClick={context.logout}> Logout </button>
}

export default LogoutButton;