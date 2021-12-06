import userEvent from '@testing-library/user-event';
import {BiMenu} from 'react-icons/bi';
import './navHeaderButton.css';

export default function NavHeaderButton(props){

    var cssName = "btn"+props.className;
    return(
        <button onClick={props.onClick} className={cssName}>{props.icon}</button>
    );
}