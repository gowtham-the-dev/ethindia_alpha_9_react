import '../css/Services.css';
import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';
import ListServices from '../components/ListServices';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

function Services() {
  const context = useContext(EscrowContext);

  useEffect(() => {
      console.log("EOA address", context.smartAccount);
  });

  return (
    <>
        <Header/>
        <Dashboard/>
        <ListServices/>
    </>
    
  );
}

export default Services;
