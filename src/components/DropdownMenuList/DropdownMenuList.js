import styles from "../DropdownMenuList/dropdownMenuList.module.css";

function DropdownMenuList(props){
    return(
        <div className={styles.contentContainer}>
            {!props.isOpen && props.expandButton}
            {props.isOpen && (
                <div className={styles.contentContainer}>
                    {props.collapseButton}
                    {props.content}
                </div>
            )}
        </div>
    );
}

export default DropdownMenuList;