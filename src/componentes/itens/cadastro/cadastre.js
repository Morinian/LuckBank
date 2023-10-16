import Styles from './cadastre.module.css'
import logo from '../../imgs/logo.png'
import Footer from '../../corpo/footer';

import {Link} from 'react-router-dom'

function Cadastre() {
  return (
    <div>
        <div className={Styles.cadastre}>
            <div className={Styles.quadrado}>

                <img src={logo}></img>
                <h1>Cadastre</h1>
               

                <form>
                    <fieldset>
                        <input type="text" placeholder="Nome"/>
                        <input type="password" placeholder="Email" />
                        <input type="text" placeholder="CPF" />
                        <div className={Styles.buton}>
                            Envie
                        </div>
                    </fieldset>
                </form>
                <Link to='/' className={Styles.linke}><p>Sair</p></Link>
                <p>Tem conta? <Link to='/Login' className={Styles.linke}>Login</Link></p>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Cadastre;
