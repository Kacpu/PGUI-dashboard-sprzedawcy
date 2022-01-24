import styles from './widgetButton.module.css'

export default function WidgetButton(props) {
    return (
        <div className={styles.container} onClick={props.onClick}>
            <div className={styles.imgContainer}>
                <img src={props.icon} alt={props.name} className={styles.imgIcon}/>
            </div>
            <div className={styles.label}>
                {props.name}
            </div>
        </div>
    );
}