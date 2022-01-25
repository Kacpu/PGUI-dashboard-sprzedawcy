import './iconSwitch.css'

export default function IconSwitch(props) {
    return (
        <label className="IconSwitch">
            <input type="IconCheckbox" onClick={props.onClick}/>
            <span className ="IconSlider"/>
        </label>
    );
}