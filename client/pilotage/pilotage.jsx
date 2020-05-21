import React from 'react' ;
import "./pilotage.scss" ;

import {
  BugReport,
  ModeComment
  } from "@material-ui/icons";

const Pilotage = () => (
  <div id="pilotage">
    <div className="action-bar">
        <div className="action-bar__title">Pilotage</div>
        <button className="action-bar__button">Nouveau ticket</button>
      </div>
      <div className="main-content">
        <div className="card-section">
          <div className="card card__red">
            <div className="card__title">1 j</div>
            <div className="card__sub-title">
              restant sur le contrat de support
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="ticket-section">
          <div className="ticket-section__title"> 
            Tickets en attente d'action de votre part
          </div>
          <div className="ticket-list">
            <div className="ticket">
              <div className="ticket__main-information">
                <div className="ticket__title">
                  [4801] Impossibilité génération de rapports
                </div>
                <div className="ticket__sub-title">
                  <BugReport/>
                  Bug - Dernière action : 5 heures
                </div>
              </div>
              <div className="ticket__status">En cours</div>
              <div className="ticket__qualification ticket__qualification_critical">
                Critique
              </div>
            </div>
            <div className="ticket">
              <div className="ticket__main-information">
                <div className="ticket__title">
                  [4801] Impossibilité génération de rapports
                </div>
                <div className="ticket__sub-title">
                <BugReport/>
                  Bug - Dernière action : 5 heures
                </div>
              </div>
              <div className="ticket__status">En cours</div>
              <div className="ticket__qualification ticket__qualification_major">
                Majeure
              </div>
            </div>
            <div className="ticket">
              <div className="ticket__main-information">
                <div className="ticket__title">
                  [4801] Impossibilité génération de rapports
                </div>
                <div className="ticket__sub-title">
                <BugReport/>
                  Bug - Dernière action : 5 heures
                </div>
              </div>
              <div className="ticket__status">En cours</div>
              <div className="ticket__qualification ticket__qualification_minor">
                Mineure
              </div>
            </div>
          </div>
        </div>
        <div className="last-discussion-section">
          <div className="last-discussion-section__title">
            Dernières discussions
          </div>
          <div className="last-discussion-list">
            <div className="last-discussion">
              <div className="last-discussion__logo">
                <ModeComment/>
              </div>
              <div className="last-discussion__main-information">
                <div className="last-discussion__title">Réponse VP&white</div>
                <div className="last-discussion__sub-title">
                  Problème de gestion des workflows sur la table « Juridique »
                </div>
                <div className="last-discussion__date">11/02/2020</div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
)

export default Pilotage 