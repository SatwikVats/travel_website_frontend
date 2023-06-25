export const AuthReducer = (state, {type, payload}) => {
    switch(type){
        case "SHOW_AUTH_MODAL":
            return{
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen,
            };
        case "SET_TO_LOGIN":
            return{
                ...state,
                selectedTab: "login",
            }
        case "SET_TO_SIGNUP":
            return{
                ...state,
                selectedTab: "signup",
            }
        case "NUMBER":
            return{
                ...state,
                number: payload,
            }
        case "EMAIL":
            return{
                ...state,
                email: payload,
            }
        case "NAME":
            return{
                ...state,
                name: payload,
            }
        case "PASSWORD":
            return{
                ...state,
                password: payload,
            }
        case "CONFIRM_PASSWORD":
            return{
                ...state,
                confirmPassword: payload,
            }
        default:
            return state;
    }
}