import axios from 'axios';

export interface ICreateUserData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    subscriptionType: string;
}

export async function createUser(props:ICreateUserData) {
    const { name, email, password, confirmPassword, subscriptionType} = props;
    
    const APIPATH = 'http://api.meucontrole.gustavopsantana.dev.br';
    //const APIPATH = 'http://localhost:4000';

    console.log({
        "name": name,
        "emal": email,
        "password": password,
        "confirmPassword": confirmPassword,
        "subscriptionType": subscriptionType
    });

    const response = await axios.post(`${APIPATH}/createUser`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        subscriptionType: subscriptionType
    });

    return response.data;
}