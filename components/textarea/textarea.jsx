import React from 'react'
import "./textarea.scss"

const Textarea = props => (
    <div className="textarea w-100">
        <span className="textarea__label">{props.label}</span>
        <textarea rows={props.rows} className="textarea__input"/>
    </div>
)

export default Textarea;