import iconMenu from '../assets/img/menu.svg';
import iconHelp from '../assets/img/help.svg';
import iconNotification from '../assets/img/notification.svg';
import arrowDown from '../assets/img/arrow-down.svg';

import "../style/components/header.scss";

const Header = () => {
    return(
        <header className="header-container">
            <div className="header-content-left">
                <button className="menu-button">
                    <img src={iconMenu} width="24px" height="24px" alt="menu-icon" />
                </button>
            </div>
            <div className="header-content-right">
                <button className="help-button">
                    <img src={iconHelp} width="25px" height="25px" alt="help-icon" />
                </button>
                <button className="notification-button">
                    <img src={iconNotification} width="21px" height="21px" alt="notification-icon" />
                </button>
                <div className="user-info">
                    <div className="user-info-avatar">
                        <img src="https://via.placeholder.com/50" className="avatar" alt="user-avatar" />
                    </div>
                    <div className="user-info-name">
                        <span className="name">Gustavo P. Santana</span>
                        <span className="subscription-type">Assinante gratuito</span>
                    </div>
                    <button className="user-menu">
                        <img src={arrowDown} width="16px" height="16px" alt="menu-icon" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;