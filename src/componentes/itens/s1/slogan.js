import Styles from './slogan.module.css'
import cartao from '../../imgs/cartao.png'

function Slogan() {
  return (
      <section>
            <div className={Styles.sloga}>

              <div className={Styles.titulo}>

                <h2>O banco da sua sorte</h2>

                <div className={Styles.cadastro}>
                    Cadastre
                </div>

              </div>
                
                <img src={cartao}></img>

            </div>

            <div className={Styles.caixona}>
              <div className={Styles.numeros}>
    
                <div className={Styles.caixa}></div>

                <div className={Styles.pontos}>
                    <div className={Styles.item0}>
                      <h2> 98%</h2>
                      <p>Satisfação</p>
                    </div>
                    <div className={Styles.item1}>
                      <h2>350K</h2>
                      <p>Satisfação</p>
                    </div>
                    <div className={Styles.item2}>
                      <h2>500</h2>
                      <p>+ Parceiros</p>
                    </div>
                    <div className={Styles.item3}>
                      <h2> 85%</h2>
                      <p>Crescimento Anual</p>
                    </div>
                </div>

                <div className={Styles.texto}>
                  <p>Nosso compromisso se traduz em números significativos que transformam vidas</p>
                </div>
                              
              </div>
            </div>
      </section>
  );
}

export default Slogan;
