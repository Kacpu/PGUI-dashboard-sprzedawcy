import ManageUserButton from "../ManageUserButton/ManageUserButton";
import IconButton from "../../elements/IconButton/IconButton";
import './NavigationHeader.module.css';

function NavigationHeader(){
    function openUserMenu(){
        return(
            <div>
                <label>Menu</label>
            </div>
        );
    }

    return(
        <div className="Navigation-Header">
            <ul className='Test'>
                <button className='menu-button'>Menu</button>
                <button className="User-button">User</button>
                <button className="settings-button">Settings</button>
            </ul>
        </div>
    );
}

export default NavigationHeader;