import { getCookies, removeCookies } from "./authenticate";
import axios from "axios";

const APIPATH = 'https://meu-controle-node.herokuapp.com';
const DebugAPIPATH = "http://localhost:4000";

window.addEventListener("load", async () => {
    const token = getCookies("token");
    const userId = getCookies("userId");

    if (window.location.pathname === "/") {
        if (token) {
            axios.post(`${APIPATH}/checkSession`, {
                userId: userId,
                token: token
            }, 
            { 
                Headers: { 
                    'Access-Control-Allow-Origin': '*' 
                } 
            }).then((response: any) => {
                if (response.data.success) {
                    console.log("Session is valid");
                }
            }).catch((error:any) => {
                removeCookies("token");
                removeCookies("userId");
                window.location.href = "/login";
            })
        } else {
            window.location.href = "/login";
        }
    }
    
    if (window.location.pathname === "/login" || window.location.pathname === "/register") {
        if (token) {
            const response = await axios.post(`${APIPATH}/checkSession`, {
                userId: userId,
                token: token
            }, 
            { 
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                  },
            });
            if (response.data.success) {
                window.location.href = "/";
            } else {
                return false;
            }
        } else {
            return false
        }
    }
})
