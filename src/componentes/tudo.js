
import Header from './corpo/header';
import Slogan from './itens/s1/slogan';
import Seguranca from './itens/seguranca/seguranca';
import Servico from './itens/servico/servico';
import Card from './itens/produtos/card';
import Final from './itens/final/final';
import Footer from './corpo/footer';

function Meio() {
  return (
    <div>
      <Header/>
      <Slogan/>
      <Seguranca/>
      <Servico/>
      <Card/>
      <Final/>
      <Footer/>
    </div>
  );
}

export default Meio;
