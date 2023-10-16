// Componente Header
import React, { useState } from 'react';
import Styles from './header.module.css';
import logo from '../imgs/logo.png';
import menu from '../imgs/menu_.png';

import {Link} from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={Styles.navbar}>
        <div className={Styles.navlist}>
          <ul>
            <div className={Styles.logo}>
              <img src={logo} alt="Logo"></img>
            </div>

            <div className={Styles.caixa}>
                <a href="#Servico" className={Styles.navlink}>Serviços</a>
                <a href="#Seguranca" className={Styles.navlink}>Vantagens</a>
                <a href="#Final" className={Styles.navlink}>Aplicativo</a>
            </div>

            <div className={Styles.login}>
                <Link to='./Login' className={Styles.linke}><p>Área do Cliente</p></Link>
            </div>

            <div className={Styles.mobilemenuicon}>
              <button onClick={toggleMenu}>
                <img className={Styles.icon} src={menu} alt="Menu"></img>
              </button>
            </div>


          </ul>
        </div>
      </nav>

      <div className={`${Styles.mobilemenu} ${isMenuOpen ? Styles.open : ''}`}>
        <ul>
          <li className={Styles.navitem}><a href="#sobre" className={Styles.navlink}>Serviços</a></li>
          <li className={Styles.navitem}><a href="#trabalho" className={Styles.navlink}>Vantagens</a></li>
          <li className={Styles.navitem}><a href="#dirfooter" className={Styles.navlink}>Aplicativo</a></li>
          <li className={Styles.navitem}><Link to='./Login' className={Styles.linke}><a href="#dirfooter" className={Styles.navlinks}>Área do Cliente</a></Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
