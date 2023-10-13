import Styles from './card.module.css'


function Card() {
  return (
      <section className={Styles.fundo}>
            <div className={Styles.card1}>
              <h3>Liberdade Financeira</h3>
              <p> você terá acesso a uma gama completa de ferramentas e recursos que o ajudarão a tomar as rédeas do seu dinheiro. </p>
            </div>
      </section>
  );
}

export default Card;
