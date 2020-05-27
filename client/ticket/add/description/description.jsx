import React from 'react'
import "./description.scss"
import { TextInput, Textarea, File } from "../../../../components"

const Description = () => (
    <div id="ticket-add-description">
        <div className="title">Description de la requête</div>
        <TextInput label="Libellé de la requête" />   
        <Textarea rows={10} label="Requête" />
        <input className="attachments" type="file" multiple="multiple"/>
        <File name="name" size="50mB" close={() => alert("close !")} />
    </div>
)

export default Description ;