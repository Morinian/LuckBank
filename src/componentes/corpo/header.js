// Componente Header
import React, { useState } from 'react';
import Styles from './header.module.css';
import logo from '../imgs/logo.png';
import menu from '../imgs/menu_.png';

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
                <a href="#trabalho" className={Styles.navlink}>Serviços</a>
                <a href="#inicio" className={Styles.navlink}>Vantagens</a>
                <a href="#sobre" className={Styles.navlink}>Aplicativo</a>
            </div>

            <div className={Styles.login}>
                <p>Área do Cliente</p>
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
          <li className={Styles.navitem}><a href="#dirfooter" className={Styles.navlinks}>Área do Cliente</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
