import '../css/Services.css';
import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';
import ListServices from '../components/ListServices';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import { useNavigate } from 'react-router-dom';

function Services() {
  const context = useContext(EscrowContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(context.smartAccount == '0x') navigate("/");  
  }, [context.smartAccount])

  return (
    <>
        <Header/>
        <Dashboard/>
        <ListServices/>
    </>
    
  );
}

export default Services;
