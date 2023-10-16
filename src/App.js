import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Meio from './componentes/tudo';
import Login from './componentes/itens/login/login';
import Cadastre from './componentes/itens/cadastro/cadastre';

function App() {
  return (
    <body>
      <Router>

        <Routes>

          <Route path='/' element={<Meio/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cadastre' element={<Cadastre/>} />


        </Routes>   

      </Router>
    </body>
  );
}

export default App;
