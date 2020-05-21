import React from 'react'
import "./application.scss"

import {
    InsertDriveFile,
    GetApp
  } from "@material-ui/icons";

const Application = () => (
    <div id="application">
        <div className="action-bar">
            <div className="action-bar__title">Mes applications</div>
            <div className="input">
                <span className="input__label">Application</span>
                <select type="text" className="input__input">
                    <option value="tes">tets</option>
                </select>
            </div>
        </div>
        <div className="main-content">
            <div className="correctif">
                <div className="correctif__tracking">
                    <img src="assets/img_avatar.png" className="tracking__people"></img>
                    <div className="tracking__details">Réalisé par Fabrice Bounchanh le 01/03/2020
                    </div>
                </div>
                <div className="correctif__body">
                    <div>- New: open in browser/webview from catalogue</div>
                    <div>- New: reader color filter blend modes</div>
                </div>
                <div className="correctif__attachments">
                    <button className="attachment__item">
                        <div className="attachment__logo">
                            <InsertDriveFile/>
                        </div>
                        <div className="attachment__name">Nom_du_super_fichier.jpg</div>
                        <div className="attachment__size">(48Ko)</div>
                        <div className="attachment__logo">
                            <GetApp/>
                        </div>
                    </button>
                    <button className="attachment__item">
                        <div className="attachment__logo">      
                            <InsertDriveFile/>
                        </div>
                        <div className="attachment__name">Nom_du_super_fichier.jpg</div>
                        <div className="attachment__size">(48Ko)</div>
                        <div className="attachment__logo">
                            <GetApp/>
                        </div>
                    </button>
                    <button className="attachment__item">
                        <div className="attachment__logo">
                            <InsertDriveFile/>
                        </div>
                        <div className="attachment__name">Nom_du_super_fichier.jpg</div>
                        <div className="attachment__size">(48Ko)</div>
                        <div className="attachment__logo">
                            <GetApp/>
                        </div>
                    </button>
                </div>
                <div className="correctif__keywords">
                    <div className="keywords">
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                        <div className="keyword__item">Keyword</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Application