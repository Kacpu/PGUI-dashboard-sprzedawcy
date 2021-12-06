import styles from './listItemButton.module.css'

function ListItemButton(props){
    return(
        <div className={styles.container}>
            <img src={props.functionalIcon} alt={props.name} width="22" height="22"/>
            <div className={styles.label}>
                {props.name}
            </div>
        </div>
    );
}

export default ListItemButton;