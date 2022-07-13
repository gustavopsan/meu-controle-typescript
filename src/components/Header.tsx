import React, {useState} from 'react';
import Gravatar from 'react-gravatar';
import AsideMenu from './AsideMenu';
import ProfileMenu from './ProfileMenu';

import iconMenu from '../assets/img/menu.svg';
import iconHelp from '../assets/img/help.svg';
import iconNotification from '../assets/img/notification.svg';
import arrowDown from '../assets/img/arrow-down.svg';

import "../style/components/header.scss";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const toggleProfile = () => setIsOpenProfile(!isOpenProfile);

    return(
        <React.Fragment>
            <header className="header-container">
                <div className="header-content-left">
                    <button className="menu-button" onClick={toggleMenu}>
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
                            <Gravatar email="gustavopsantana4@gmail.com" className="avatar" alt="user-avatar" />
                        </div>
                        <div className="user-info-name">
                            <span className="name">Gustavo P. Santana</span>
                            <span className="subscription-type">Assinante gratuito</span>
                        </div>
                        <button className="user-menu" onClick={toggleProfile}>
                            <img src={arrowDown} width="16px" height="16px" alt="menu-icon" />
                        </button>
                    </div>
                </div>
            </header>
            <AsideMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
            <ProfileMenu isOpen={isOpenProfile}/>
        </React.Fragment>
    )
}

export default Header;