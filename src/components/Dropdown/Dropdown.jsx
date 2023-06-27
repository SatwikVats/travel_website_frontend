import { MenuList, MenuItem, Divider } from "@mui/material";
import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
//import {AccountCircleOutlinedIcon} from '@mui/icons-material';
import "./Dropdown.css";
import account_icon from "./account_circle.png";

export const Dropdown = () => {
    const {username, number, authDispatch} = useAuth();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        authDispatch({
            type: "CLEAR_USER_DATA",
        });
        authDispatch({
            type: "CLEAR_CREDENTIALS",
        });
        authDispatch({
            type: "SHOW_DROPDOWN",
        });
    }

    const handleWishlistClick = () => {
        authDispatch({
            type: "SHOW_DROPDOWN",
        });
        navigate("/wishlist");
    }

    return(
        <MenuList>
            <div className="dropdown-container d-flex direction-column fixed right-0 shadow">
                <div className="profile-menu d-flex align-center direction-column"> 
                    <img className="acc_icon" src={account_icon} alt="account_icon" />              
                    <span className="profile-name d-flex align-center gap-small">
                        Hi, {username}
                    </span>
                    <span className="profile-email d-flex align-center gap-small">
                        {number}
                    </span>
                </div>
                <Divider/>
                <MenuItem className="logout-menu-item" onClick={handleLogoutClick}>                
                    <span className="option-span logout cursor-pointer d-flex align-center gap-small">
                        <span className="material-icons-outlined">logout</span>
                    Logout
                    </span>
                </MenuItem>
                <Divider/>
                <MenuItem className="wishlist-menu-item" onClick={handleWishlistClick}>                
                    <span className="option-span wishlist-span cursor-pointer d-flex align-center gap-small">
                        <span className="material-icons-outlined">favorite_border</span>
                    Wishlist
                    </span>
                </MenuItem>
            </div>
        </MenuList>
    )
}