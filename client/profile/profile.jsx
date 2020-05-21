import React from 'react'
import "./profile.scss"

const Profile = () => (
    <div id="profile">
        <div className="action-bar">
            <div className="action-bar__title">Mon profil</div>
        </div>
        <div className="main-content">
            <div className="profil-background-image">
                <img className="profil-background-image__img" src="assets/img_avatar.png" />
            </div>
            <div className="profil section">
                <div className="title">
                    Profil
                </div>
                <div className="d-flex jc-spaceBetween">
                    <div className="input w-49">
                        <span className="input__label">Prénom</span>
                        <input type="text" className="input__input" />
                    </div>
                    <div className="input w-49">
                        <span className="input__label">Nom</span>
                        <input type="text" className="input__input" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-49">
                        <span className="input__label">Langue</span>
                        <select type="text" className="input__input input__input_select">
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="email section">
                <div className="title">
                    E-mail
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <span className="input__label">Langue</span>
                        <input type="text" className="input__input" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <input type="text" className="input__input" placeholder="Nouvelle adresse mail" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <input type="text" className="input__input" placeholder="Confirmer la nouvelle adresse mail" />
                    </div>
                </div>
            </div>
            <div className="connexion section">
                <div className="title">
                    Connexion
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <span className="input__label">Identifiant</span>
                        <input type="text" className="input__input" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <span className="input__label">Mot de passe actuel</span>
                        <input type="text" className="input__input" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <input type="text" className="input__input" placeholder="Nouveau mot de passe" />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="input w-100">
                        <input type="text" className="input__input" placeholder="Confirmer le nouveau mot de passe" />
                    </div>
                </div>
            </div>
        </div>
        <div className="save">
            <button className="save__button">Enregistrer mes paramètres</button>
        </div>
    </div>
)

export default Profile