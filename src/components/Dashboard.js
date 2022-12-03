import {EscrowContext} from '../context/EscrowContext'; 
import { useContext } from 'react';

export default function Header() {
    const context = useContext(EscrowContext);

    return <div className="dashboardStats">
    <h1>Dashboard & Stats</h1>
    <br/>
    <div className="row">
        <div className="col-md-4">
            <h1>1045</h1>
            <p>API Calls</p>
        </div>
        <div className="col-md-4">
            <h1>{context.services.length}</h1>
            <p>Services Created</p>
        </div>
        <div className="col-md-4">
            <h1>900</h1>
            <p>Successfull Transactions</p>
        </div>
    </div>
</div>

}