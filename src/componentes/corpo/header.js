// Componente Header
import React, { useState } from 'react';
import Styles from './header.module.css';
import logo from '../imgs/logo.png';
import menu from '../imgs/menu_.png';

import {Link as ScrollLink  } from 'react-scroll'
import {Link as RouterLink  } from 'react-router-dom'

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

                <ScrollLink className={Styles.navlink}
                  activeClass="active" 
                  to="servicos" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}
                  >Serviços</ScrollLink>

                <ScrollLink className={Styles.navlink}
                  activeClass="active" 
                  to="card" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} >Vantagens</ScrollLink>

                <ScrollLink className={Styles.navlink}
                  activeClass="active" 
                  to="app" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} >Aplicativo</ScrollLink>
            </div>

            <div className={Styles.login}>
                <RouterLink to='./Login' className={Styles.linke}><p>Área do Cliente</p></RouterLink>
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
          <li className={Styles.navitem}><ScrollLink
                  activeClass="active" 
                  to="servicos" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500} className={Styles.navlink}>Serviços</ScrollLink></li>
          <li className={Styles.navitem}><ScrollLink
                  activeClass="active" 
                  to="card" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}  href="#trabalho" className={Styles.navlink}>Vantagens</ScrollLink></li>
          <li className={Styles.navitem}><ScrollLink
                  activeClass="active" 
                  to="app" 
                  spy={true} 
                  smooth={true} 
                  offset={50} 
                  duration={500}  href="#dirfooter" className={Styles.navlink}>Aplicativo</ScrollLink></li>
          <li className={Styles.navitem}><RouterLink to='./Login' className={Styles.linke}><a href="#dirfooter" className={Styles.navlinks}>Área do Cliente</a></RouterLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
