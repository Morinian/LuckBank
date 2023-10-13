import Styles from './footer.module.css'
import logo from '../imgs/logo.png'


function Footer() {
  return (
      <footer>
        <div className={Styles.cima}>
            <img src={logo}></img>
            <p>LuckBank sob o CNPJ nº 59.285.411/0001-13, com sede na Avenida Paulista, São Paulo – SP.</p>
        </div>

        <div className={Styles.linha}></div>
        <div className={Styles.p1}>
             <p>copyright Morira - todos os direitos reservados</p>
        </div>
        
      </footer>
  );
}

export default Footer;
