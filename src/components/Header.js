import {EscrowContext} from '../context/EscrowContext';
import { useContext } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Header() {
    const context = useContext(EscrowContext);

    return <nav>
    <img src="/TrescLogo.png" alt=""/>
    <div className="misc-links">
        {context.socialLoginSDK && context.smartAccount == '0x' && <LoginButton/>}
        {context.socialLoginSDK && context.smartAccount != '0x' && 
        <>
            <p>Hello, {localStorage.getItem('name')}</p>
            <LogoutButton/>
        </>
        }
    </div>
    </nav>

}