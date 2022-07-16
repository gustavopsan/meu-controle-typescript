import axios from 'axios';
import Cookies from 'universal-cookie';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export interface IAuthenticateData {
    email: string;
    password: string;
}

export interface ICookieData {
    name: string;
    value: string;
}

export async function authenticate(props:IAuthenticateData) {
    const { email, password } = props;

    const APIPATH = 'https://meu-controle-node.herokuapp.com';
    //const APIPATH = 'http://localhost:4000';

    const response = await axios.post(`${APIPATH}/authenticate`, {
        email: email,
        password: password
    });

    return response.data;
}

export function setCookies(props:ICookieData) {
    const cookies = new Cookies();
    cookies.set(props.name, props.value);
}

export function getCookies(props:string) {
    const cookies = new Cookies();
    return cookies.get(props);
}

export function removeCookies(props:string) {
    const cookies = new Cookies();
    cookies.remove(props);
}