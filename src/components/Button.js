import React from "react"

const Button = (props) => {
    return (
        <div>
            <button style={{width: "100px", height: "30px"}} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}

export default Button
