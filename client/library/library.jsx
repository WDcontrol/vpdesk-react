import React from 'react'
import "./library.scss"

import {
    CreateNewFolder,
    Publish,
    DragIndicator,
    FilterList,
    ExpandMore,
    Info,
    Settings,
    Folder
  } from "@material-ui/icons";

const Library = () => (
    <div id="library">
        <div className="action-bar">
            <div className="action-bar__main">
                <div className="action-bar__title">Librairie</div>
                <div className="action-bar__icon action-bar__icon_add-folder">
                    <CreateNewFolder />
                </div>
                <div className="action-bar__icon action-bar__icon_publish">
                    <Publish />
                </div>
            </div>
            <div className="action-bar__sub">
                <span className="action-bar__path action-bar__path_deactivate">
                    Librairie /
                </span>
                <span className="action-bar__path">Dossier</span>
            </div>
        </div>
        <div className="main-content">
            <table className="librairie">
                <thead className="librairie__header">
                    <tr>
                        <th className="librairie__draggable">
                            <DragIndicator className="librairie__draggable__icon" />
                        </th>
                        <th className="librairie__checkbox">
                            <input type="checkbox" />
                        </th>
                        <th className="librairie__header__title librairie__header__title_icon">
                            <FilterList />
                        </th>
                        <th className="librairie__header__title librairie__header__title_name">Nom
                            <ExpandMore />
                        </th>
                        <th className="librairie__header__title librairie__header__title_size">Taille</th>
                        <th className="librairie__header__title librairie__header__title_created-on">Créé le </th>
                        <th className="librairie__header__options">
                            <Info className="librairie__item__info"/>
                            <Settings className="librairie__item__settings" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="7">
                            <div className="librairie__body">
                                <table className="librairie__body__table">
                                    <tbody>
                                        <tr className="librairie__item">
                                            <td className="librairie__draggable">
                                                <DragIndicator className="librairie__draggable__icon" />
                                            </td>
                                            <td className="librairie__checkbox">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="librairie__item__container">
                                                <Folder className="librairie__item__icon_folder" />
                                            </td>
                                            <td className="librairie__item__name"> vente vente vente vente</td>
                                            <td className="librairie__item__size">230 Ko</td>
                                            <td className="librairie__item__created-on">02/03/2020</td>
                                            <td className="librairie__item__options">
                                                <Info className="librairie__item__info"/>
                                                <Settings className="librairie__item__settings" />
                                            </td>
                                        </tr>
                                        <tr className="librairie__item">
                                            <td className="librairie__draggable">
                                                <DragIndicator className="librairie__draggable__icon" />
                                            </td>
                                            <td className="librairie__checkbox">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="librairie__item__container">
                                                <div className="librairie__item__icon librairie__item__icon_word">W</div>
                                            </td>
                                            <td className="librairie__item__name">avant-vente
                                            </td>
                                            <td className="librairie__item__size">230 Ko</td>
                                            <td className="librairie__item__created-on">02/03/2020</td>
                                            <td className="librairie__item__options">
                                                <Info className="librairie__item__info"/>
                                                <Settings className="librairie__item__settings" />
                                            </td>
                                        </tr>
                                        <tr className="librairie__item">
                                            <td className="librairie__draggable">
                                                <DragIndicator className="librairie__draggable__icon" />
                                            </td>
                                            <td className="librairie__checkbox">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="librairie__item__container">
                                                <div className="librairie__item__icon librairie__item__icon_excel">X</div>
                                            </td>
                                            <td className="librairie__item__name">avant-vente
                                            </td>
                                            <td className="librairie__item__size">230 Ko</td>
                                            <td className="librairie__item__created-on">02/03/2020</td>
                                            <td className="librairie__item__options">
                                                <Info className="librairie__item__info"/>
                                                <Settings className="librairie__item__settings" />
                                            </td>
                                        </tr>
                                        <tr className="librairie__item">
                                            <td className="librairie__draggable">
                                                <DragIndicator className="librairie__draggable__icon" />
                                            </td>
                                            <td className="librairie__checkbox">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="librairie__item__container">
                                                <div className="librairie__item__icon librairie__item__icon_pdf">PDF</div>
                                            </td>
                                            <td className="librairie__item__name">avant-vente
                                            </td>
                                            <td className="librairie__item__size">230 Ko</td>
                                            <td className="librairie__item__created-on">02/03/2020</td>
                                            <td className="librairie__item__options">
                                                <Info className="librairie__item__info"/>
                                                <Settings className="librairie__item__settings" />
                                            </td>
                                        </tr>
                                        <tr className="librairie__item">
                                            <td className="librairie__draggable">
                                                <DragIndicator className="librairie__draggable__icon" />
                                            </td>
                                            <td className="librairie__checkbox">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="librairie__item__container">
                                                <div className="librairie__item__icon librairie__item__icon_powerpoint">P</div>
                                            </td>
                                            <td className="librairie__item__name">avant-vente
                                            </td>
                                            <td className="librairie__item__size">230 Ko</td>
                                            <td className="librairie__item__created-on">02/03/2020</td>
                                            <td className="librairie__item__options">
                                                <Info className="librairie__item__info"/>
                                                <Settings className="librairie__item__settings" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default Library