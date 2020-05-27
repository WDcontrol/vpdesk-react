import React from 'react'
import "./contract.scss"

import {
    InsertDriveFile,
    GetApp
  } from "@material-ui/icons";

import { File } from "../../components"

const Contract = () => (
    <div id="contract">
        <div className="action-bar">
            <div className="action-bar__title">Mes contrats</div>
            <div className="action-bar__selector">
            <div className="action-bar__selector input">
                <span className="input__label">Contrat</span>
                <select type="text" className="input__input">
                <option value="tes">tets</option>
                </select>
            </div>
            </div>
        </div>
        <div className="main-content">
            <div className="section">
            <div className="section__title">Nom du super contrat</div>
            <div className="contract">
                <div className="contract__item platform">
                <div className="contract__item__label">Plateforme</div>
                <div className="platform__title">Rodéo (production)</div>
                <div className="contract__item__value">
                    Statut :&nbsp;
                    <span className="is-active">Actif</span>
                </div>
                <div className="contract__item__value">
                    Garantie :&nbsp;
                    <span className="is-active">Active (136 jours)</span>
                </div>
                </div>
                <div className="contract__item renewal">
                <div className="contract__item__label">Renouvellement</div>
                <div className="contract__item__value">
                    Mis en place le 02/01/2020
                </div>
                <div className="contract__item__value">
                    Echeance le 02/07/2020 (6 mois)
                </div>
                </div>
                <div className="contract__item contract__item_one-line periodicity">
                <div className="contract__item__label">Periodicité</div>
                <div className="contract__item__value">Pluriannuel</div>
                </div>
                <div className="contract__item contract__item_one-line hosting">
                <div className="contract__item__label">Hébergement solution</div>
                <div className="contract__item__value">Pluriannuel</div>
                </div>
                <div className="contract__item contract__item_one-line reference">
                <div className="contract__item__label">Référence contrat</div>
                <div className="contract__item__value">IUDHUHFEUE 56789 FIUHE</div>
                </div>
                <div className="contract__item contract__item_one-line attachment">
                <div className="contract__item__label">Document</div>
                <File name="nom" size="50kB" download />
                <File name="nom" size="50kB" download />
                <File name="nom" size="50kB" download />
                <File name="nom" size="50kB" download />
                <File name="nom" size="50kB" download />
                
                </div>
            </div>
            </div>
            <div className="section">
            <div className="section__title">Facturation</div>
            <div className="facturation">
                <div className="facturation__item">
                <div>
                    <div className="facturation__item__name">Nom de l'activité</div>
                    <div className="facturation__item__qualification">Annomalie</div>
                </div>
                <div className="facturation__item__type">Régie</div>
                <div className="facturation__item__date">05/03/2020</div>
                <div className="facturation__item__amount">2700€</div>
                <div className="facturation__item__download">
                    <i className="fa fa-download"></i>
                </div>
                </div>
                <div className="facturation__item">
                <div>
                    <div className="facturation__item__name">Nom de l'activité</div>
                    <div className="facturation__item__qualification">Annomalie</div>
                </div>
                <div className="facturation__item__type">Régie</div>
                <div className="facturation__item__date">05/03/2020</div>
                <div className="facturation__item__amount">2700€</div>
                <div className="facturation__item__download">
                    <i className="fa fa-download"></i>
                </div>
                </div>
                <div className="facturation__item">
                <div>
                    <div className="facturation__item__name">Nom de l'activité</div>
                    <div className="facturation__item__qualification">Annomalie</div>
                </div>
                <div className="facturation__item__type">Régie</div>
                <div className="facturation__item__date">05/03/2020</div>
                <div className="facturation__item__amount">2700€</div>
                <div className="facturation__item__download">
                    <i className="fa fa-download"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
)

export default Contract