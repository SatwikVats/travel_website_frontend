import axios from "axios";

export const signupHandler = async (name, number, email, password) => {
    try{
        const data = await axios.post("https://dull-blue-reindeer-vest.cyclic.app/api/auth/register", {
            username:name, number: number, email: email, password: password
        });
        console.log(data);
    }
    catch(err){
        console.log("Failed to Register!")
    }
}