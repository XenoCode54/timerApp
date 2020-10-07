import React, { useState } from "react"
import Select from "./Select";
import ClockLst from "./ClockList";

const tzdata = window.tzdata_javascript;


const Timer = () => {
    const [timezones, setTimezones] = useState({
        timezones: Object.keys(tzdata.timezones()),
        values: [],
    })


    const createValue = (value) => {
        const v = value;
        setTimezones({ ...timezones, values: timezones.values.concat(v) })
    }


    return (
        <div className="container">
            <Select
                timeZone={timezones.timezones}
                onValueCreate={createValue} />
            <ClockLst
                valueList={timezones.values} />
        </div>
    )
}
export default Timer;