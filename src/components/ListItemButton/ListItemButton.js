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
        <div className={styles.container} onClick={() => props.onClick(props.param)}>
            <img src={props.functionalIcon} className={checkIfLanguage()} alt={props.name} width="22" height="22"/>
            <div className={styles.label}>
                {props.isChosen ? <b>{props.name}</b> : props.name}
            </div>
        </div>
    );
}

export default ListItemButton;