import { createContext, useState, useEffect } from "react";
import {ethers} from 'ethers';

export const AuthContext = createContext();

export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('0x');
    const [tasks, setTasks] = useState([]);  
    
    const getProvider = () => {
        if(!ethereum) return;
        return new ethers.providers.Web3Provider(ethereum);
    }
    
    const getConnectedAccount = async () => {
        const accounts = await ethereum.request({method: 'eth_accounts'})
        setCurrentAccount(accounts.length ? accounts[0] : '0x');
    }
    
    const connectToWallet = async () => {
        try{
            const accounts = await ethereum.request({ method : 'eth_requestAccounts' })
            setCurrentAccount(accounts.length ? accounts[0] : '0x');
            setAlert({show: true, 'message' : 'Wallet connected successfully'})
        }catch (error){
            setAlert({show: true, 'message' : (error.code == 4001 ? "Connect wallet to continue" : error.message)})
        }
    }

    const getNetwork = async () => {
        const network = await getProvider().getNetwork();
        setNetwork(network);
    }
    
    const isWalletConnected = () => {
        return (currentAccount != '0x' && (network.chainId && network.chainId == 137));
    } 
    
    const getBalance = async () => {
        const balance = await getProvider().getBalance(currentAccount);
        setBalance(ethers.utils.formatEther(balance));
    }
  
    useEffect(() => {
        if(!ethereum) return;

        getNetwork();
        ethereum.on('accountsChanged', getConnectedAccount);
        ethereum.on('chainChanged', () => {
            window.location.reload()
        })
        getConnectedAccount()    
        
        return () => {
            if(ethereum) ethereum.off('accountsChanged', getConnectedAccount);
          }
    }, [])

    useEffect(() => {
        if(!ethereum) return;
        
        if(!isWalletConnected()){
            setTasks([]);
            setBalance(0);
            return;
        }

        getBalance();
    }, [currentAccount, network])

    
    return (
        <AuthContext.Provider value={{connectToWallet, currentAccount, balance, tasks, network, taskCreateStatus,
         taskUpdateStatus, setTaskUpdateStatus, setAlert, alert, setTaskDeleteStatus, taskDeleteStatus,
         setTaskCreateStatus, getProvider, setTasks, setNetwork, setBalance, isWalletConnected, isMember, setIsMember, 
         mintNftStatus, setMintNftStatus, membershipPrice, setMembershipPrice, membershipTokenId, setMembershipTokenId}}>
            {children}
        </AuthContext.Provider>
    );
}