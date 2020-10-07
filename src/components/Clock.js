import React from "react";
const tzdata = window.tzdata_javascript;


class Clock extends React.Component{
    componentDidMount(){
        this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 50)
    }
    componentWillMount(){
        clearInterval(this.forceUpdateInterval);
    }
    renderTime = (value) =>{
        const date = new Date().valueOf();
        const time = new tzdata.zoneinfo(value).strftime("%+", date);
        const stringTime = JSON.stringify(time);
        return stringTime;
    }

    render(){
        const time = this.renderTime(this.props.value);
        const value = this.props.value;
        return(
            <div>
                <span>
                    {value} : {time}
                </span>
            </div>
        )
    }
}
export default Clock;