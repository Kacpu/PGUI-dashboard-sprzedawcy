import './switch.css'

export default function Switch(props) {
    return (
        <label className="switch">
            <input type="checkbox" onClick={props.onClick}/>
            <span className ="slider"/>
        </label>
    );
}