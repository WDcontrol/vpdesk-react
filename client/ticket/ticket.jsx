import React from 'react'
import "./ticket.scss"

import {
    BugReport
  } from "@material-ui/icons";

const Ticket = () => (
    <div id="ticket">
      {/* <iframe src="../ticketAdd">
          <p>Your browser does not support iframes.</p>
      </iframe> */}
      <div className="action-bar">
        <div className="action-bar__tab">
          <div className="action-bar__tab__title">Mes tickets</div>
          <div className="action-bar__tab__title action-bar__tab__title_disabled">
            Mes brouillons
          </div>
        </div>
        <button className="action-bar__button">Nouveau ticket</button>
      </div>
      <div className="main-content">
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
                <BugReport />
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
                <BugReport />
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
                    <BugReport />
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
        <div className="ticket-section">
          <div className="ticket-section__title">
            En cours
          </div>
          <div className="ticket-list">
            <div className="ticket">
              <div className="ticket__main-information">
                <div className="ticket__title">
                  [4801] Impossibilité génération de rapports
                </div>
                <div className="ticket__sub-title">
                    <BugReport />
                  Bug - Dernière action : 5 heures
                </div>
              </div>
              <div className="ticket__status">En cours</div>
              <div className="ticket__qualification ticket__qualification_critical">
                Critique
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-section">
          <div className="ticket-section__title">
            Clôturés
          </div>
          <div className="ticket-list">
            <div className="ticket">
              <div className="ticket__main-information">
                <div className="ticket__title">
                  [4801] Impossibilité génération de rapports
                </div>
                <div className="ticket__sub-title">
                    <BugReport />
                  Bug - Dernière action : 5 heures
                </div>
              </div>
              <div className="ticket__status">En cours</div>
              <div className="ticket__qualification ticket__qualification_critical">
                Critique
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Ticket