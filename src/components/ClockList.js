import React from "react"
import Clock from "./Clock";

function ClockList(props) {

    return (
        <div className="clocks">
            {props.valueList.map((value) => (
                <Clock key={value.toString()} value={value} />
            ))}
        </div>
    )
}
export default ClockList;