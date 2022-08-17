import React from "react";
import iconMenu from '../assets/img/menu-white.svg';
import iconChart from '../assets/img/chart-icon.svg';
import iconHome from '../assets/img/home-icon.svg';
import reportIcon from '../assets/img/report-icon.svg';
import todoIcon from '../assets/img/todo-icon.svg';

import "../style/components/asideMenu.scss";

interface AsideMenuProps {
    selectedView: string;
    setSelectedView: (view: string) => void;
    isOpen: boolean;
    toggleMenu: () => void;
}

export const AsideMenu = (props:AsideMenuProps) => {

    function handleSelected(view:string) {
        props.setSelectedView(view);
        props.toggleMenu();
    }

    return (
        <React.Fragment>
            <div className={props.isOpen ? "aside-menu-container open" : "aside-menu-container"}>
                <div className="aside-menu-content">
                    <div className="aside-menu-content-header">
                        <button className="menu-button" onClick={props.toggleMenu}>
                            <img src={iconMenu} width="24px" height="24px" alt="menu-icon" />
                        </button>
                        <h2 className="logo-text">meucontrole</h2>
                    </div>
                    <div className="aside-menu-content-body">
                        <ul className="aside-menu-list">
                            <li className="aside-menu-item">
                                <a href="#" id="home" className="aside-menu-link" onClick={() => handleSelected("home")}>
                                    <img src={iconHome} alt="icon-home" />
                                    <b>Início</b>
                                </a>
                            </li>
                            <li className="aside-menu-item">
                                <a href="#" id="overview" className="aside-menu-link" onClick={() => handleSelected("overview")}>
                                    <img src={iconChart} alt="icon-chart" />
                                    <b>Visão Geral</b>
                                </a>
                            </li>
                            <li className="aside-menu-item">
                                <a href="#" id="reports" className="aside-menu-link" onClick={() => handleSelected("reports")}>
                                    <img src={reportIcon} alt="report-icon" />
                                    <b>Relatórios</b>
                                </a>
                            </li>
                            <li className="aside-menu-item">
                                <a href="#" id="todo" className="aside-menu-link" onClick={() => handleSelected("todo")}>
                                    <img src={todoIcon} alt="todo-icon" />
                                    <b>To Do</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}