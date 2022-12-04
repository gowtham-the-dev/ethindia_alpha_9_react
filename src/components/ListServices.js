import { useEffect,useContext } from "react";
import {EscrowContext} from '../context/EscrowContext'; 
import Service from "./Service";
import { useNavigate } from 'react-router-dom';

function ListServices () {
    const context = useContext(EscrowContext);
    const navigate = useNavigate();
    const createNewService = () => {
        navigate("/services/new");
    }

    return <div>
        <button className="newServiceBtn" onClick={createNewService}>Create A New Service</button>
        <div className="d-containers">
        <div className="row">
            {
                context.services.length > 0 && context.services.map((service, index) => <Service service={service} key={index}/>)
            }
        </div>
        </div>
        {console.log("service", context.services)}
    </div>

}

export default ListServices;