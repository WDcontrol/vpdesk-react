import React from 'react'
import "./detail.scss"

const TicketDetail = () => (
    <div id="ticketDetail">
        <div className="action-bar">
        <div className="action-bar__button-bar">
          <button className="action-bar__button action-bar__button_black">
            Retour
          </button>
          <button className="action-bar__button">
            Editer
          </button>
        </div>
        <div className="action-bar__label">Détail du ticket</div>
      </div>
      <div className="details">
        <div className="details__lifecycle">lifecycle</div>
        <div className="details__main-information">
          <div className="details__item">
            <div className="details__item__label">Application</div>
            <div className="details__item__env">Rodéo (Production)</div>
            <div className="details__item__version">Enablon V8.12</div>
            <div className="details__item__guarantee guarantee">
              <div className="guarantee__label">Garantie:</div>
              <div className="guarantee__state">Active</div>
            </div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Client</div>
            <div className="details__item__client">Rodéo (Production)</div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Contrat de support</div>
            <div className="details__item__time-left">11 jours restants</div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Qualification</div>
            <div className="details__item__qualification">Bug</div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Criticité</div>
            <div className="details__item__criticity">Mineure</div>
          </div>
          <div className="details__item">
            <div className="details__item__label">A traiter avant</div>
            <div className="details__item__treat-before">SLA : 3h</div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Requête</div>
            <div className="details__item__request">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sit amet elit leo. Ut vitae facilisis turpis, id tincidunt
              velit. Donec ac dui sed quam egestas vulputate. Phasellus tempor
              pulvinar est, in viverra orci semper in. Suspendisse suscipit
              nulla tellus, eget mattis magna consequat a. Proin vel mauris
              euismod, tempor ante et, lobortis odio.
            </div>
            <button className="attachment">
              <div className="attachment__logo">
                <div className="fa fa-file"></div>
              </div>
              <div className="attachment__name">Nom_du_super_fichier.jpg</div>
              <div className="attachment__size">(48Ko)</div>
              <div className="attachment__logo">
                <div className="fa fa-download"></div>
              </div>
            </button>
          </div>
          <div className="details__item">
            <div className="details__item__label">Participants</div>
            <div className="participants">
              <div className="participants__item">Mélanie Lenôtre</div>
              <div className="participants__item">Michel Lemarié</div>
            </div>
          </div>
          <div className="details__item details__item__full-width">
            <div className="details__item__label">Assigné à :</div>
            <div className="assigned-to">
              <img className="assigned-to__img" src="../../assets/img_avatar.png" />
              <div className="assigned-to__name">Fabrice Bounchanh</div>
            </div>
          </div>
          <div className="details__item">
            <div className="details__item__label">Créé le</div>
            <div className="created-on">
              <div className="created-on__date">04/03/2020 à 14h27</div>
              <div className="created-on__name">par Laurent Laroche</div>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default TicketDetail ;