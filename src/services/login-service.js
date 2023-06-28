import axios from "axios"

export const loginHandler = async (number, password) => {
    try{
        const {data: {/*accessToken:*/ accessToken, username},}= await axios.post("https://dull-blue-reindeer-vest.cyclic.app/api/auth/login", {
            number: number, password: password
        })
        console.log({accessToken, username});
        return {accessToken, username};
    }
    catch(err){
        console.log("Unable to log in.");
    }
}