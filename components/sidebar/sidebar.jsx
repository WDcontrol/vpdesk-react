import "./style.css";

const {
    Link
} = ReactRouterDOM;

const Sidebar = () => {
    return (
        <div id="leftSideBar" className="section-leftSideBar isOpen">
            <div className="d-flex jc-spaceBetween aitems-center mx-2">
                <div className="d-flex">
                    <div className="elem-mainLogo">
                        <img src="../../assets/VPhelpdesk.png" />
                    </div>
                    <div className="elem-moduleSelector ml-2">
                        <div className="elem-moduleSelector-title">Helpdesk</div>
                        <i className="material-icons ml-1">expand_more</i>
                    </div>
                </div>
                <div className="d-flex aitems-center jc-flexEnd">
                    <div className="elem-search">
                        <i className="material-icons">search</i>
                        <input type="text" className="elem-search-input" placeholder="Recherche...." />
                    </div>
                    <div className="elem-notification">
                        <i className="material-icons">notifications</i>
                        <div className="elem-notification__bubble">3</div>
                    </div>
                </div>
            </div>

            <div className="elem-search">
                <i className="material-icons">search</i>
                <input type="text" className="elem-search-input" placeholder="Recherche...." />
            </div>

            <div className="section-leftSideBar-main">
                <div className="elem-welcome">
                    <div className="elem-welcome-title">Bonjour Benjamin</div>
                    <div className="elem-welcome-subTitle">
                        Bienvenue sur votre plateforme de pilotage
                    </div>
                </div>
                <div className="elem-section-link">
                    <div className="elem-titleWithSeparator">Modules</div>
                    <div className="elem-links">
                        <Link className="elem-links-link is-active" to="/pilotage">Pilotage</Link>
                        <Link className="elem-links-link" to="/ticket">Tickets</Link>
                        <Link className="elem-links-link" to="/contract">Contrat</Link>
                        <Link className="elem-links-link" to="/library">Librairie</Link>
                        <Link className="elem-links-link" to="/application">Applications</Link>
                        <Link className="elem-links-link" to="/profil">Profil</Link>
                    </div>
                </div>
                <div className="elem-section-link">
                    <div className="elem-titleWithSeparator">Vos référents</div>
                    <div className="elem-referent">
                        <div className="d-flex aitems-center">
                            <img className="elem-roundImage" alt="" src="../../assets/img_avatar.png" />
                            <div className="element-referent-data">
                                <div className="elem-referent-title">Fabrice Bounchanh</div>
                                <div className="elem-referent-subTitle">Référent principal</div>
                            </div>
                        </div>
                        <div className="elem-iconOptions">
                            <i className="material-icons">more_horiz</i>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wrapperContainer" className="elem-container__wrapper">
                <i className="material-icons elem-icon__wrapper">chevron_right</i>
            </div>
        </div>
    )
}

export default Sidebar;