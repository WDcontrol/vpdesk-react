import React from "react"
import "./add.scss"
import { MemoryRouter, Route, Link, Redirect } from 'react-router-dom'
import {
    Close,
    Done
} from "@material-ui/icons";

import {
    Application,
    Description,
    Finalisation,
    Participant,
    Qualification
} from "./"

const TicketAdd = props => { 
    
    function handleClickOutsidePopup(event) {
        if (event.target == document.getElementById("ticketAdd")) {
            props.closePopup();
        }
    }
    return (
        <div id="ticketAdd" onClick={e => handleClickOutsidePopup(e)}>
            <MemoryRouter>
                <div className="card">
                    <div className="top-bar">
                        <div className="top-bar__title">Création d'un nouveau ticket</div>
                        <div className="top-bar__right">
                            <div className="top-bar__save-draft">Enregistré en tant que brouillon</div>
                            <div className="top-bar__close">
                                <Close onClick={() => {
                                    props.closePopup();
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="add-ticket__body">
                        <div className="lifecycle">
                            <Link to="/ticketAddApplication" className="lifecycle__elem lifecycle__elem_done">
                                <div className="lifecycle__number">
                                    <Done/>
                                </div>
                                <div className="lifecycle__label">Application</div>
                            </Link>
                            <div className="lifecycle__ligne"></div>

                            <Link to="/ticketAddDescription" className="lifecycle__elem lifecycle__elem_active">
                                <div className="lifecycle__number">2</div>
                                <div className="lifecycle__label">Description</div>
                            </Link>
                            <div className="lifecycle__ligne"></div>

                            <Link to="/ticketAddQualification" className="lifecycle__elem">
                                <div className="lifecycle__number">3</div>
                                <div className="lifecycle__label">Qualification</div>
                            </Link>
                            <div className="lifecycle__ligne"></div>

                            <Link to="/ticketAddParticipant" className="lifecycle__elem">
                                <div className="lifecycle__number">4</div>
                                <div className="lifecycle__label">Participants</div>
                            </Link>
                            <div className="lifecycle__ligne"></div>
                            <Link to="/ticketAddFinalisation" className="lifecycle__elem">
                                <div className="lifecycle__number">5</div>
                                <div className="lifecycle__label">Finalisation</div>
                            </Link>
                        </div>
                        <Redirect to="/ticketAddApplication"/>
                        <Route path="/ticketAddApplication" component={Application} />
                        <Route path="/ticketAddDescription" component={Description} />
                        <Route path="/ticketAddQualification" component={Qualification} />
                        <Route path="/ticketAddParticipant" component={Participant} />
                        <Route path="/ticketAddFinalisation" component={Finalisation} />
                        
                    </div>
                    
                </div>
            </MemoryRouter>
        </div>
    ) 
}

export default TicketAdd