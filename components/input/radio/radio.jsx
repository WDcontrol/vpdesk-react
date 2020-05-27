import React from 'react'
import "./radio.scss"

const Radio = props => (
    <div className="radio">
        <input id={props.value} className="radio__input" type="radio" name={props.name} value={props.value} />
        <label className="radio__label" htmlFor={props.value}>{props.label}</label>
    </div>
)

export default Radio;