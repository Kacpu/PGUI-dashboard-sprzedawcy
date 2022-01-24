import styles from "./widgetFrame.module.css"
import CloseButton from "../../assets/icons/close-icon.png"

export default function WidgetFrame(props) {
    return (
        <div className={styles.widgetFrame}>
            <label className={styles.labelFrame}>{props.WidgetName}</label>
            <div className={styles.widgetDiv}>
                <button className={styles.closeButton} onClick={props.OnCloseButton}>
                    <img src={CloseButton} className={styles.imgIcon} />
                </button>
                <div className={styles.nav}>
                    {props.WidgetNav}
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}