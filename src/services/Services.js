import Api from "./Api";

export function getToken(){
    return localStorage.getItem('token');
}

export function getServices(){
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };    
    console.log('config - ', config);
    return Api.get('/services', config);
}

export function createService({name, description, funds, actionTypes}){
    const config = {
        headers: { Authorization: `Bearer ${getToken()}` }
    };
    
    return Api.put('/services',{'name':name, 'description':description, 'lockinFunds':funds, 'subscriberAction':actionTypes}, config)
}

