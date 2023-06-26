import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../context";
import { loginHandler } from "../../services";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {

    const {authDispatch, number, password} = useAuth();

    const handleNumberChange = (event) => {
        isNumberValid = validateNumber(event.target.value);
        if(isNumberValid){
            console.log("Valid number");
            authDispatch({
                type: "NUMBER",
                payload: event.target.value
            })
        }
        else{
            console.log("Invalid number");
        }
    }

    const handlePasswordChange = (event) => {
        isPasswordValid = validatePassword(event.target.value);
        if(isPasswordValid){
            console.log("Valid password");
            authDispatch({
                type: "PASSWORD",
                payload: event.target.value
            })
        }
        else{
            console.log("Invalid password");
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(isNumberValid && isPasswordValid){
            const {accessToken, username} = await loginHandler(number, password);
            authDispatch({
                type: "SET_ACCESS_TOKEN",
                payload: accessToken,
            });
            authDispatch({
                type: "SET_USERNAME",
                payload: username,
            });

        }
        authDispatch({
            type: "CLEAR_USER_DATA",
        });
        authDispatch({
            type: "SHOW_AUTH_MODAL",
        });
    }

    return(
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label" type="number">Mobile Number <span className="asterisk">*</span>{" "}</label>
                    <input defaultValue={number} className="auth-input" placeholder="Enter Mobile Number" maxLength="10" 
                    onChange={handleNumberChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span>{" "}</label>
                    <input defaultValue={password} className="auth-input" placeholder="Enter Password" type="password" 
                    onChange={handlePasswordChange} required/>
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Login</button>
                </div>
            </form>
            <div className="cts">
                <button className="button btn-outline-primary cursor-pointer">
                    Login with Test Credentials
                </button>
            </div>
        </div>
    )
}