import React from "react"
import "./add.scss"

import {
    Close,
    History
} from "@material-ui/icons";

const TicketAdd = () => (
    <div id="ticketAdd" >
        <div className="card">
            <div className="top-bar">
                <div className="top-bar__title">Création d'un nouveau ticket</div>
                <div className="top-bar__right">
                    <div className="top-bar__save-draft">Enregistré en tant que brouillon</div>
                    <div className="top-bar__close">
                        <Close />
                    </div>
                </div>
            </div>
            <div className="add-ticket__body">
                <div className="lifecycle">
                    <div className="lifecycle__elem lifecycle__elem_active">
                        <div className="lifecycle__number">1</div>
                        <div className="lifecycle__label">Application</div>
                    </div>
                    <div className="lifecycle__ligne"></div>
                    <div className="lifecycle__elem">
                        <div className="lifecycle__number">2</div>
                        <div className="lifecycle__label">Description</div>
                    </div>
                    <div className="lifecycle__ligne"></div>
                    <div className="lifecycle__elem">
                        <div className="lifecycle__number">3</div>
                        <div className="lifecycle__label">Qualification</div>
                    </div>
                    <div className="lifecycle__ligne"></div>
                    <div className="lifecycle__elem">
                        <div className="lifecycle__number">4</div>
                        <div className="lifecycle__label">Participants</div>
                    </div>
                    <div className="lifecycle__ligne"></div>
                    <div className="lifecycle__elem">
                        <div className="lifecycle__number">5</div>
                        <div className="lifecycle__label">Finalisation</div>
                    </div>
                </div>
                <div className="app-choice">
                    <div className="app-choice__title title">Quelle application est concernée ?</div>
                    <div className="app-choice__items">
                        <div className="app-choice__item app-choice__item_active">
                            <div className="app-choice__item__radio-button"></div>
                            <div>
                                <div className="app-choice__item__title">Rodéo (Production)</div>
                                <div className="app-choice__item__version">Enablon V8.12</div>
                                <div className="app-choice__item__guarantee">Garantie :
                                    <span className="app-choice__item__guarantee__status">
                                        Active
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="app-choice__item">
                            <div className="app-choice__item__radio-button"></div>
                            <div>
                                <div className="app-choice__item__title">Rodéo (Production)</div>
                                <div className="app-choice__item__version">Enablon V8.12</div>
                                <div className="app-choice__item__guarantee">Garantie :
                                    <span className="app-choice__item__guarantee__status">
                                        Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subject">
                    <div className="subject__title title">Quelle application est concernée ?</div>
                    <div className="subject__items">
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                        <div className="subject__item">
                            <div className="subject__item__icon">
                                <History />
                            </div>
                            <div className="subject__item__title">Gestion des backups</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TicketAdd