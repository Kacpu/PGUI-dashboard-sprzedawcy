import styles from "../DropdownMenuList/dropdownMenuList.module.css";

export default function DropdownMenuList(props){

    return(
        <div ref={props.dropdownRef} className={props.mainButtonStyle ? `${props.mainButtonStyle} ${props.width}` : styles.contentContainer}>
            {props.isOpen ? props.collapseButton : props.expandButton}
            {props.isOpen && (
                <div className={props.contentStyle ? `${props.contentStyle} ${props.width}` : styles.contentContainer}>
                    {props.content}
                </div>
            )}
        </div>
    );
}
