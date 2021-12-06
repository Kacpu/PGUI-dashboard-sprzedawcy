import DropdownMenuItemButton from "../DropdownMenuItemButton/DropdownMenuItemButton";
import ListItemButton from "../ListItemButton/ListItemButton";
import styles from './dropdownMenu.module.css'
import changeAccountIcon from '../../assets/icons/change-user.png'
import logoutIcon from '../../assets/icons/logout.png'
import expandIcon from '../../assets/icons/expand-icon.png'
import userIcon from '../../assets/icons/user-icon.png'

function DropdownMenu(props){

    function handleChangeUser() {

    }

    return(
        <div className={styles.container}>
            <DropdownMenuItemButton
                functionalIcon={changeAccountIcon}
                name={"Change account"}
                lastItem={<img src={expandIcon} alt="expand" width="30" height="30"/>}
            />
            <ListItemButton
                functionalIcon={userIcon}
                name={"User"}
            />
            <DropdownMenuItemButton
                functionalIcon={logoutIcon}
                name={"Logout"}
                lastItem={null}
            />
        </div>
    );
}

export default DropdownMenu;