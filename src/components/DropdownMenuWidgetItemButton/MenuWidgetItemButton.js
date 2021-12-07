import styles from'./menuWidgetItemButton.module.css'
import addIcon from "../../assets/icons/add.png";
import subtractIcon from "../../assets/icons/substract.png";


function MenuWidgetItemButton(props){
    return(
        <div className={`${styles.container} ${props.isWidgetOpen ? styles.open : null}`} onClick={props.onClick}>
            <div className={styles.imgContainer}>
                <img src={props.widgetIcon} alt={props.widgetName} className={styles.imgIcon}/>
            </div>
            <div className={styles.label}>
                {props.widgetName}
            </div>
            <div className={styles.lastItem}>
                <img src={props.isWidgetOpen ? subtractIcon : addIcon}
                     alt="manage widget"
                     className={styles.imgIcon}
                     width="30" height="30"
                />
            </div>
        </div>
    );
}

export default MenuWidgetItemButton;