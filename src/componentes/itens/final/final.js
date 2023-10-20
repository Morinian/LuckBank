import Styles from './final.module.css'
import cart1 from '../../imgs/celular.png'
import disponivel from '../../imgs/disponivel.png'

function Final() {
  return (
      <div className={Styles.fundo} id='app'>
  

            <img src={cart1}></img>



            <div className={Styles.cart2}>
              <h2>Transforme sua vida  com o nosso app</h2>
              <img src={disponivel}></img>
            </div>
      </div>
  );
}

export default Final;
