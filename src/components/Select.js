import React from "react"

function Select(props) {
    const getTimezoneValue = (event) => {
        const value = event.target.value;
        props.onValueCreate(value);
    }

    return (
        <div className="select">
            <select onChange={getTimezoneValue}>
                {props.timeZone.map((timezone) => (
                    <option key={timezone.toString()}>{timezone}</option>
                ))}
            </select>
        </div>
    )
}
export default Select;