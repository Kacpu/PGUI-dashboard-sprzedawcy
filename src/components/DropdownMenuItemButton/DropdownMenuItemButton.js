import styles from'./dropdownMenuItemButton.module.css'

function DropdownMenuItemButton(props){
    return(
        <div className={styles.container} onClick={props.onClick}>
            <div className={styles.imgContainer}>
                <img src={props.functionalIcon} alt={props.name} width="30" height="30"/>
            </div>
            <div className={styles.label}>
                {props.name}
            </div>
            <div className={`${props.lastItem ? `${styles.imgContainer} ${styles.lastItem}` : ''}`}>
                {props.lastItem}
            </div>
        </div>
    );
}

export default DropdownMenuItemButton;