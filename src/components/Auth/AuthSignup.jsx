import "./Auth.css";
import { useAuth } from "../../context";
import { validateName, validateEmail, validateNumber, validatePassword } from "../../utils";
import { signupHandler } from "../../services";

let isNumberValid, isNameValid, isEmailValid, isPasswordValid, isConfirmPasswordValid;

export const AuthSignup = () => {
    const {name, email, password, number, confirmPassword, authDispatch} = useAuth();

    console.log({name, email, password, number, confirmPassword});

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


    const handleEmailChange = (event) => {
        isEmailValid = validateEmail(event.target.value);
        if(isEmailValid){
            console.log("Valid email");
            authDispatch({
                type: "EMAIL",
                payload: event.target.value
            })
        }
        else{
            console.log("Invalid email");
        }
    }


    const handleNameChange = (event) => {
        isNameValid = validateName(event.target.value);
        if(isNameValid){
            console.log("Valid name");
            authDispatch({
                type: "NAME",
                payload: event.target.value
            })
        }
        else{
            console.log("Invalid name");
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

    const handleConfirmPasswordChange = (event) => {
        isConfirmPasswordValid = validatePassword(event.target.value);
        if(isConfirmPasswordValid){
            console.log("Valid confirmPassword.");
            authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: event.target.value
            })
        }
        else{
            console.log("Invalid confirmPassword.");
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(isNameValid && isNumberValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && 
            isPasswordValid===isConfirmPasswordValid){
            signupHandler(name, number, email, password);
        }
        authDispatch({
            type: "CLEAR_USER_DATA",
        });
        authDispatch({
            type: "SET_TO_LOGIN",
        });
    };

    return(
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label" type="number">Mobile Number <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Mobile Number" maxLength="10" defaultValue={number}
                    onChange={handleNumberChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Name <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Name" defaultValue={name}
                    onChange={handleNameChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Email <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Email" type="email" defaultValue={email} 
                    onChange={handleEmailChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Password" type="password" defaultValue={password} 
                    onChange={handlePasswordChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Confirm Password <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Password" type="password" defaultValue={confirmPassword}
                    onChange={handleConfirmPasswordChange} required/>
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Submit</button>
                </div>
            </form>
        </div>
    )
}