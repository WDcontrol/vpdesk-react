import React from 'react'
import "./exchange.scss"

import {
    Send,
    AttachFile
  } from "@material-ui/icons";

const Exchange = () => (
    <div id="exchange">
        <div className="action-bar">
            <button className="action-bar__button action-bar__button_black">
            Retour
            </button>
            <div className="action-bar__label">Echanges</div>
        </div>
        <div className="chat">
            <div className="chat__body">
            <div className="chat__message chat__message_received">
                <img className="person-icon" src="../../assets/img_avatar.png" />
                <div className="chat__message__main-information">
                <div className="chat__message__tracking">
                    tracking
                </div>
                <div className="chat__message__items">
                    <div className="chat__message__item">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore nam similique adipisci cupiditate placeat accusamus
                    perspiciatis, ut eveniet tenetur iusto dignissimos eos
                    laborum debitis, iste expedita temporibus suscipit quidem
                    laudantium!
                    </div>
                    <div className="chat__message__item">
                    item2
                    </div>
                </div>
                </div>
            </div>
            <div className="chat__message chat__message_sent">
                <img className="person-icon" src="../../assets/img_avatar.png" />
                <div className="chat__message__main-information">
                <div className="chat__message__tracking">
                    tracking
                </div>
                <div className="chat__message__items">
                    <div className="chat__message__item">last</div>
                    <div className="chat__message__item">
                    item2
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="chat__separator"></div>
            <div className="chat__bottom">
            <input type="text" className="chat__input" placeholder="Ecrire un commentaire" />
            <div className="icon icon_attachment">
                <AttachFile />
            </div>
            <div className="icon icon_send">
                <Send />
            </div>
            </div>
        </div>
    </div>
)

export default Exchange