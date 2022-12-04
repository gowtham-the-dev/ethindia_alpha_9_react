import '../css/CreateService.css';
import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';
import Header from '../components/Header';
import CreateService from '../components/CreateService';
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
        <CreateService/>
    </>
    
  );
}

export default Services;
