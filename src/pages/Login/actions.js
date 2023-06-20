import axios from "axios";
import { AUTH } from "../../utils/EndPoints";
import _history from "../../utils/history";

export const loginAction = ({email,password}) => {
    // const url = 'http://localhost:9000/auth';
    // const username = 'test@example.com';
    // const password = '123456';

    const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
    
    var bodyParameters = {
        "access_token": "sG6lMKh9DoKVhWQcCXgin9GkrS0fqi9g"
    }
    let esc = encodeURIComponent;
    let body = Object.keys(bodyParameters).map(k => esc(k) + "=" + esc(bodyParameters[k])).join("&");

    return dispatch => {
        axios.post(AUTH, body, {
            headers: {
                'Authorization': `Basic ${token}`
            },
        })
            .then((response) => {
                if (response.status === 201) {
                    localStorage.setItem('token', response.data.token);
                    dispatch({ 
                        type:"LOGIN",
                        payload:response.data
                    })
                    _history.push("/pages/dashboard")
                }
            }).catch((error) => {
                if (!error.response) {
                    // network error
                    console.log('Error: Network Error');
                } else {
                    console.log(error.response.data);
                }
            })
    }
};