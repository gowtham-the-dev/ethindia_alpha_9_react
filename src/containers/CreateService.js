import '../css/CreateService.css';
import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';
import ListServices from '../components/ListServices';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import CreateService from '../components/CreateService';

function Services() {
  const context = useContext(EscrowContext);

  useEffect(() => {
      console.log("EOA address", context.smartAccount);
  });

  return (
    <>
        <Header/>
        <CreateService/>
    </>
    
  );
}

export default Services;
