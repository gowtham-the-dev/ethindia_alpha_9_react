import Api from "./Api";

export function getToken(){
    return localStorage.getItem('token');
}

export function getServices(){
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    }; 
    console.log("Token sent - ",  getToken());
    return Api.get('/services', config);
}

export function createService({name, description, funds, actionTypes}){
    const config = {
        headers: { Authorization: `Bearer ${getToken()}`, 'Content-Type': 'application/json' }
    };
    
    return Api.put('/services',{'name':name, 'description':description, 'lockinFunds': parseInt(funds) , 'subscriberAction':actionTypes}, config)
}

