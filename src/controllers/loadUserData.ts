import axios from "axios";
import { getCookies } from "./authenticate";

const userId = getCookies("userId");
const APIPATH = 'https://meu-controle-node.herokuapp.com';
const DebugAPIPATH = "http://localhost:4000";
var userData = {} as any;

window.addEventListener("DOMContentLoaded", async () => {
    const response = await axios.post(`${APIPATH}/getUserData`, {
        userId: userId
    });

    userData.userId = response.data.userId;
    userData.name = response.data.name;
    userData.email = response.data.email;
    userData.subscriptionType = response.data.subscriptionType;

})

export default userData;