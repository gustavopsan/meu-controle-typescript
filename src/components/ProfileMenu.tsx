import iconExit from '../assets/img/exit-icon.svg';
import iconEdit from '../assets/img/edit-icon.svg';

import "../style/components/profileMenu.scss";

interface ProfileMenuProps {
    isOpen: boolean;
}

const ProfileMenu = (props:ProfileMenuProps) => {
    return (
        <div className={props.isOpen ? "profile-menu-container open" : "profile-menu-container"}>
            <div className="profile-menu-content">
                <ul className="profile-menu-list">
                    <li className="profile-menu-item">
                        <button className="menu-button">
                            <img src={iconEdit} alt="exit-menu" />
                            <b>Editar Perfil</b>
                        </button>
                    </li>
                    <li className="profile-menu-item">
                        <button className="menu-button">
                            <img src={iconExit} alt="exit-menu" />
                            <b>Sair</b>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileMenu;