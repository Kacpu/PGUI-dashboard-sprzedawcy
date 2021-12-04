import ManageUserButton from "../ManageUserButton/ManageUserButton";
import IconButton from "../../elements/IconButton/IconButton";

function NavigationHeader(){
    function openUserMenu(){
        return(
            <div>
                <label>Menu</label>
            </div>
        );
    }

    return(
        <div className="NavigationHeader">
            <h1>Header</h1>

            <ManageUserButton
            openUserButton={openUserMenu()}
            />

            <IconButton />
            <IconButton />
        </div>
    );
}

export default NavigationHeader;