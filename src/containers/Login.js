import Header from '../components/Header';
import '../css/Login.css';
import { useEffect , useContext} from 'react';
import {EscrowContext} from '../context/EscrowContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const context = useContext(EscrowContext);
  const navigate = useNavigate();

  useEffect(() => {
      if(context.smartAccount != '0x') navigate("/services");  
  }, [context.smartAccount])

  return (
    <>
      <Header/>
      <div class="ellipseOne"></div>
      <div class="ellipseTwo"></div>
      <h1 class="mainTitle">Add A <span class="gradientText"><i>Layer Of Trust</i></span><br/>To Your Business.</h1>
    </>
  );
}

export default Login;
