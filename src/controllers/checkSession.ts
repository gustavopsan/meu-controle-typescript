import { getCookies, removeCookies } from "./authenticate";
import axios from "axios";

const APIPATH = 'http://api.meucontrole.gustavopsantana.dev.br';
//const APIPATH = "http://localhost:4000";

window.addEventListener("load", async () => {
    const token = getCookies("token");
    const userId = getCookies("userId");

    if (window.location.pathname === "/") {
        if (token) {
            axios.post(`${APIPATH}/checkSession`, {
                userId: userId,
                token: token
            }).then((response: any) => {
                if (response.data.success) {
                    console.log("Session is valid");
                }
            }).catch((error:any) => {
                removeCookies("token");
                removeCookies("userId");
                window.location.href = "/";
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
