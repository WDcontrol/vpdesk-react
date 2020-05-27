import React, { useState } from "react"

import "./help.scss"

import {
    Help
} from "@material-ui/icons";

const CustomHelp = props => {
    const [showHelpBox, setShowHelpBox] = useState(false);

    const toggleHelpBox = () => {
        setShowHelpBox(!showHelpBox)
    }

    return(
        <div className="help" onClick={() => toggleHelpBox()}>
            { showHelpBox ? 
                <div className="helpbox"> 
                    <div className="helpbox__body">
                        <span className="helpbox__tip" />
                        { props.children }
                    </div>
                </div>
                : false
            }
            <Help />
        </div>
    )
}

export default CustomHelp