import styles from './listItemButton.module.css'

function ListItemButton(props){

    function checkIfIconIsFlag(){
        if(props.name === "Polish" || props.name === "English"){
            return null
        }
        else{
            return styles.imgIcon
        }
    }

    return(
        <div className={styles.container}>
            <img src={props.functionalIcon} className={checkIfIconIsFlag()} alt={props.name} width="22" height="22"/>
            <div className={styles.label}>
                {props.name}
            </div>
        </div>
    );
}

export default ListItemButton;