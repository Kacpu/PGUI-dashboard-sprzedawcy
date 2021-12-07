import styles from './dropdownMenu.module.css'

function DropdownMenu(props){
    return(
        <div className={`${styles.dropdown} ${props.position}`} onBlur={props.onBlur}>
            {props.dropButton}
            {props.isOpen && (
                <div className={`${styles.contentContainer} ${props.contentPosition}`}>
                    {props.content}
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;