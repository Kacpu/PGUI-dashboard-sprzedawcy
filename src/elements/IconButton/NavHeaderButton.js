import userEvent from '@testing-library/user-event';
import {BiMenu} from 'react-icons/bi';
import styles from './navHeaderButton.module.css';

export default function NavHeaderButton(props){

    var cssName = styles.btn + props.className;
    return(
        <button onClick={props.onClick} className={cssName}>{props.icon}</button>
    );
}