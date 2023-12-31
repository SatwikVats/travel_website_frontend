export const AuthReducer = (state, {type, payload}) => {
    switch(type){
        case "SHOW_AUTH_MODAL":
            return{
                ...state,
                isAuthModalOpen: !state.isAuthModalOpen,
            };
        case "SHOW_DROPDOWN":
            return{
                ...state,
                isDropdownOpen: !state.isDropdownOpen,
            }
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
        case "CLEAR_USER_DATA":
            return{
                ...state,
                name: "",
                number: "",
                email: "",
                password: "",
                confirmPassword: "",
            }
        case "SET_ACCESS_TOKEN":
            return{
                ...state,
                accessToken: payload,
            }
        case "SET_USERNAME":
            return{
                ...state,
                username: payload,
            }
        case "CLEAR_CREDENTIALS":
            return{
                ...state,
                accessToken: "",
                username: "",
            }
        default:
            return state;
    }
}