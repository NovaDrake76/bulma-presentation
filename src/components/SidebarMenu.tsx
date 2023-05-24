import React from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu: React.FC = () => {
    return (
        <aside className="menu">
            <p className="menu-label">
                Bulma CSS
            </p>
            <ul className="menu-list">
                <li><Link to="/whatisbulma">O que é Bulma?</Link></li>
                <li><Link to="/purpose">Para que serve o Bulma?</Link></li>
                <li><Link to="/functionalities">Funcionalidades do Bulma</Link></li>
                <li><Link to="/howtouse">Como usar o Bulma?</Link></li>
            </ul>
        </aside>
    );
};

export default SidebarMenu;
