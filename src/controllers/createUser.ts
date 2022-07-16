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
    
    const APIPATH = 'https://meu-controle-node.herokuapp.com';
    //const APIPATH = 'http://localhost:4000';

    const response = await axios.post(`${APIPATH}/createUser`, {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        subscriptionType: subscriptionType
    });

    return response.data;
}