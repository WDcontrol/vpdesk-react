import React from 'react'
import "./qualification.scss"
import { RadioInput, Help } from "../../../../components"

const Qualification = () => (
    <div id="ticket-add-qualification">
        <div className="title">Qualifier la requête</div>
        <div className="qualification">
            <div className="qualification__header">
                <div className="qualification__title">Qualification</div>
                <Help> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, eligendi, iste error ut ex id repellat sint laborum ipsa qui totam excepturi blanditiis temporibus tenetur magnam, fuga cumque! Temporibus, deleniti? </Help>
            </div>
            <div className="qualification__radio radio">
                <RadioInput name="qualification" value="bug" label="Bug" />
                <RadioInput name="qualification" value="evol" label="Evolution" />
                <RadioInput name="qualification" value="func" label="Fonctionnel" />
                <RadioInput name="qualification" value="tech" label="Technique" />
            </div>
        </div>
        <div className="criticity">
            <div className="criticity__header">
                <div className="criticity__title">Criticité</div>
                    <Help />
                </div>
            <div className="criticity__radio radio">
                <RadioInput name="criticity" value="crit" label="Critique" />
                <RadioInput name="criticity" value="major" label="Majeure" />
                <RadioInput name="criticity" value="minor" label="Mineure" />
            </div>
        </div>
        <div className="bottom">
            <button className="bottom__button">Sauvegarder</button>
        </div>
    </div>
)

export default Qualification ;