import styles from './navHeaderButton.module.css';

export default function NavHeaderButton(props){
    return(
        <button className={`${props.style} ${styles.btn}`} onClick={props.onClick}>
            {props.icon}
        </button>
    );
}