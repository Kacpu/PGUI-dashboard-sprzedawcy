import styles from './DropdownButton.module.css'

export default function DropdownButton(props) {
    return(
        <div className={styles.container} onClick={ () => props.onClick(props.name)}>
            <div className={styles.label}>
                {props.name}
            </div>
            <div className={`${props.icon ? `${styles.imgContainer} ${styles.lastItem}` : ''}`}>
                {props.icon &&
                    <img src={props.icon} alt={props.name} className={styles.imgIcon}/>
                }
            </div>
        </div>
    );
}