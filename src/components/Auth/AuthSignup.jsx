import "./Auth.css";
import { useAuth } from "../../context";

export const AuthSignup = () => {
    const {name, email, password, number, confirmPassword, authDispatch} = useAuth();

    const handleNumberChange = (event) => {
        authDispatch({
            type: "NUMBER",
            payload: event.target.value
        })
    }

    const handleEmailChange = (event) => {
        authDispatch({
            type: "EMAIL",
            payload: event.target.value
        })
    }

    const handleNameChange = (event) => {
        authDispatch({
            type: "NAME",
            payload: event.target.value
        })
    }

    const handlePasswordChange = (event) => {
        authDispatch({
            type: "PASSWORD",
            payload: event.target.value
        })
    }

    const handleConfirmPasswordChange = (event) => {
        authDispatch({
            type: "CONFIRM_PASSWORD",
            payload: event.target.value
        })
    }

    return(
        <div className="auth-container">
            <form>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label" type="number">Mobile Number <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Mobile Number" maxLength="10" value={number}
                    onChange={handleNumberChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Name <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Name" value={name}
                    onChange={handleNameChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Email <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Email" type="email" value={email} 
                    onChange={handleEmailChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Password" type="password" value={password} 
                    onChange={handlePasswordChange} required/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Confirm Password <span className="asterisk">*</span>{" "}</label>
                    <input className="auth-input" placeholder="Enter Password" type="password" value={confirmPassword}
                    onChange={handleConfirmPasswordChange} required/>
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Submit</button>
                </div>
            </form>
        </div>
    )
}