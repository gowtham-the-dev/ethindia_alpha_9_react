import { createContext, useState, useEffect } from "react";
import SocialLogin from "@biconomy/web3-auth";
import {ethers} from 'ethers';
import { createService, getServices } from "../services/Services";

export const EscrowContext = createContext();

export const TransactionProvider = ({children}) => {

    const [socialLoginSDK, setSocialLoginSDK] = useState(null);
    const [provider, setProvider] = useState(null);
    const [smartAccount, setSmartAccount] = useState('0x');
    const [services, setServices] = useState([]); 
    const [createServiceStatus, setCreateServiceStatus] = useState("not-started"); 
    const [alert, setAlert] = useState({
        'show' : false,
        'message' : '',
        'status' : '',
    });
    const [userInfo, setUserInfo] = useState();

    const initSDK = async () => {
        const socialLoginSDK = new SocialLogin();
        await socialLoginSDK.init('0x13881');
        setSocialLoginSDK(socialLoginSDK);
    }

    const loginWithBiconomy = async () => {
        try {
            socialLoginSDK.showConnectModal();
            socialLoginSDK.showWallet();
        
            if (!socialLoginSDK?.web3auth?.provider) return;

            console.log("Login with BICO");
            const provider = new ethers.providers.Web3Provider(
                socialLoginSDK.web3auth.provider,
            );
            const accounts = await provider.listAccounts();    
            socialLoginSDK.hideWallet();
            setSmartAccount(accounts.length ? accounts[0] : '0x');
            setAlert({show: true, 'message' : 'Wallet connected successfully'})
        } catch (error){
            setAlert({show: true, 'message' : (error.code == 4001 ? "Connect wallet to continue" : error.message)})
        }
    }

    const getConnectedAccount = async () => {   
        // await socialLoginSDK.logout();
        if (!socialLoginSDK?.web3auth?.provider) return;
        
        const provider = new ethers.providers.Web3Provider(
            socialLoginSDK.web3auth.provider,
        );
        setProvider(provider);

        const accounts = await provider.listAccounts();            
        setSmartAccount(accounts.length ? accounts[0] : '0x');
    }
    
    const isWalletConnected = () => {
        return (smartAccount != '0x');
    } 
    
    const getUserInfo = async () => {
        if (socialLoginSDK && smartAccount) {
          const userInfo = await socialLoginSDK.getUserInfo();
          setUserInfo(userInfo);
          localStorage.setItem('token', userInfo.idToken);
          localStorage.setItem('profile_image', userInfo.profileImage);
          localStorage.setItem('name', userInfo.name);
          console.log("userInfo", userInfo);
        }
    }

    const loadServices = async () => {
        let services = await getServices();
        console.log("s - ", services);        
        setServices(services.data);
    };

    const newService = async ({name, description, funds, actionTypes}) => {
        setCreateServiceStatus("started");
        await createService({name, description, funds, actionTypes});
        await loadServices();
        setCreateServiceStatus("completed");
    }

    const logout = async () => {
        if(socialLoginSDK) {
            await socialLoginSDK.logout();
            setSmartAccount('0x');
            localStorage.removeItem("token");
        }
    }
    
    useEffect(() => {
        initSDK();
    }, [])

    useEffect(() => {
        getConnectedAccount();
        getUserInfo();
        loadServices();
    }, [socialLoginSDK, socialLoginSDK?.web3auth?.provider])


    useEffect(() => {
        if(socialLoginSDK && isWalletConnected()){
            socialLoginSDK.hideWallet();
        }
    }, [socialLoginSDK, smartAccount])



    useEffect(() => {
        if(!isWalletConnected()){
            setServices([]);
            return;
        }
    }, [smartAccount])

    
    return (
        <EscrowContext.Provider value={{loginWithBiconomy, smartAccount ,setAlert, alert, 
         isWalletConnected, socialLoginSDK, logout, getUserInfo, newService, createServiceStatus, setCreateServiceStatus}}>
            {children}
        </EscrowContext.Provider>
    );
}