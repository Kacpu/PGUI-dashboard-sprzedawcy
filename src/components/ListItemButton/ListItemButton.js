import styles from './listItemButton.module.css'

function ListItemButton(props){

    function checkIfLanguage(){
        if(props.type === "language"){
            return null;
        }
        else{
            return styles.imgIcon;
        }
    }

    return(
        <div className={styles.container} onClick={props.onClick}>
            <img src={props.functionalIcon} className={checkIfLanguage()} alt={props.name} width="22" height="22"/>
            <div className={styles.label}>
                {props.name}
            </div>
        </div>
    );
}

export default ListItemButton;