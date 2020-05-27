import React from 'react'
import {
    History
} from "@material-ui/icons";

import "./application.scss"

const Application = () => (
    <div id="ticket-add-application">
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
        <div className="bottom">
            <button className="bottom__button">Sauvegarder</button>
        </div>
    </div>
)

export default Application ;