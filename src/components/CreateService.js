import { useState, useContext, useEffect } from "react";
import {EscrowContext} from '../context/EscrowContext';
import { useNavigate } from 'react-router-dom';


export default function CreateService() {
    const context = useContext(EscrowContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [funds, setFunds] = useState(0);
    const [actionTypes, setActionTypes] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        context.newService({name, description, funds, actionTypes});
    }

    useEffect(() => {
        console.log("IUE");
        if(context.createServiceStatus == "completed"){
            console.log("completed");
            context.setCreateServiceStatus("not-started");
            navigate(-1);

        }
    }, [context.createServiceStatus])

     return <div className="createService">
    
    <h1>Create A New Service</h1>
    <br/>
    <form onSubmit={(e) => submit(e)} >
        <div className="row">
            <div className="col-6">
                <p>Service Name</p>
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className="col-6">
                <p>Funds (MATIC)</p>
                <input type="number" name="funds" id="funds" onChange={(e) => setFunds(e.target.value)} value={funds}/>
            </div>
        </div>
        <br/><br/>
        <div className="row">
            <div className="col-6">
                <p>Action Type</p>
                <select id="actionType" name="actionType" onChange={(e) => setActionTypes(e.target.value)} value={actionTypes}>
                    <option value="0">True / False</option>
                </select>
            </div>
            <div className="col-6">
                <p>Receivers Address</p>
                <input type="text" name="address" id="address" value={context.smartAccount} disabled/>
            </div>
        </div>
        <br/><br/>
        <div className="row">
            <div className="col-12">
                <p>Description</p>
                <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
        </div>
        <br/>
        <button type="submit" className="createServiceBtn" disabled = {context.createServiceStatus != "not-started"}>
            { context.createServiceStatus == "not-started" ? "Create Service" : "Loading..." }
        </button>
    </form>
</div>

}