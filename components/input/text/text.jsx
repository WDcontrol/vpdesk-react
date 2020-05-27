import React from 'react'
import "./text.scss"

const Text = props => (
    <div className="inputText w-100">
        <span className="inputText__label">{props.label}</span>
        <input type="text" className="inputText__input" />
    </div>
)

export default Text;