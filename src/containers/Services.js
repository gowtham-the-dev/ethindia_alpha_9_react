import logo from '../logo.svg';
import { useEffect, useContext } from 'react';
import { ethers } from "ethers";
import {EscrowContext} from '../context/EscrowContext';
import ListServices from '../components/ListServices';

function Services() {
  const context = useContext(EscrowContext);

  useEffect(() => {
      console.log("EOA address", context.smartAccount);
  });

  return (
    <ListServices/>
  );
}

export default Services;
