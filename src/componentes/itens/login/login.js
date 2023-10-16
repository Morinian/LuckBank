import Styles from './login.module.css'
import logo from '../../imgs/logo.png'
import Footer from '../../corpo/footer';

import {Link} from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className={Styles.login}>
            <div className={Styles.quadrado}>

                <img src={logo}></img>
                <h1>Login</h1>
               

                <form>
                    <fieldset>
                        <input type="text" placeholder="CPF"/>
                        <input type="password" placeholder="Email" />
                        <div className={Styles.buton}>
                            Envie
                        </div>
                    </fieldset>
                </form>
                <Link to='/' className={Styles.linke}><p>Sair</p></Link>
                <p>Sem conta? <Link to='/Cadastre' className={Styles.linke}>Cadastre</Link></p>
            </div>
        </div> 
        <Footer/>
    </div>
  );
}

export default Login;
