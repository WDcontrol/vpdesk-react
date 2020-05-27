import React from 'react'
import "./participant.scss"
import { Select } from "../../../../components"

const options = [
    { value: '1', label: 'Jean-Pierre de la Moitre' },
    { value: '2', label: 'Mélanie Lenôtre'},
    { value: '3', label: 'Michel Lemarié'},
  ];

const Participant = () => (
    <div id="ticket-add-participant">
        <div className="title">Quelles sont les parties concernées</div>
        <Select isMulti options={options} placeholder="Choix des participants" />
        <div className="bottom">
            <button className="bottom__button">Sauvegarder</button>
        </div>
    </div>
)

export default Participant ;