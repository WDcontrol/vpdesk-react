import React from 'react'
import './file.scss'
import {
    InsertDriveFile,
    GetApp,
    Close
  } from "@material-ui/icons";

const File = props => (
    <button className={`attachment__item ${props.download ? "clickable" : ""} `}>
        <div className="attachment__left">
            <div className="attachment__logo">
                <InsertDriveFile/>
            </div>
            <div className="attachment__name">{props.name}</div>
            <div className="attachment__size">({props.size})</div>
            {
                props.download ?
                <div className="attachment__logo">
                    <GetApp/>
                </div> : false
            }
        </div>

        {
            props.close ? 
            <div className="attachment__logo clickable" onClick={props.close}>
                <Close/>
            </div> : false
        }
    </button>
)

export default File