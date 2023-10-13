import './App.css';

import Header from './componentes/corpo/header';
import Slogan from './componentes/itens/s1/slogan';
import Seguranca from './componentes/itens/seguranca/seguranca';
import Servico from './componentes/itens/servico/servico';
import Card from './componentes/itens/produtos/card';
import Final from './componentes/itens/final/final';
import Footer from './componentes/corpo/footer';

function App() {
  return (
      <body>
          <Header/>
          <Slogan/>
          <Seguranca/>
          <Servico/>
          <Card/>
          <Final/>
          <Footer/>
      </body>
  );
}

export default App;
