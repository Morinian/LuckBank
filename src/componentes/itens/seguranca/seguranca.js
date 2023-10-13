import Styles from './seguranca.module.css'
import gif from '../../imgs/seguranca.gif'

function Seguranca() {
  return (
      <div className={Styles.caixa}>
            <div className={Styles.caixa1}>            
                <img src={gif}></img>
            </div>

            <div className={Styles.caixa2}>
                <p><span>Segurança</span> ao alcance dos seus dedos com o <span>LuckBank</span> </p>
            </div>
      </div>
  );
}

export default Seguranca;
