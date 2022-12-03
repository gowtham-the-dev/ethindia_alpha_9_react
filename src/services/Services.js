import Api from "./Api";

export function getToken(){
    return localStorage.getItem('token');
}

const config = {
    headers: { Authorization: `Bearer ${getToken()}` }
};

export function getServices(){
    return Api.get('/services', config);
}

export function createService({title,category,body}){
    return Api.post('/services',{title,category,body}, config)
}


