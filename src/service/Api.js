import axios from 'axios';

const Port = "http://localhost:5500";

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${Port}/signup`,data);

    } catch (error) {
        console.log("Error while calling signup API", error);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${Port}/login`,data);
    } catch (error) {
        console.log("Error while calling login API", error);
        return error.response;
    }
}