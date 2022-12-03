import { useEffect,useContext } from "react";
import {EscrowContext} from '../context/EscrowContext';


function ListServices () {
    const context = useContext(EscrowContext);

    return <div>
        {console.log("service", context.services)}
    </div>

}

export default ListServices;