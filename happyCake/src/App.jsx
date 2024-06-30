import './App.css'
import Navegador from './components/Navegador'
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {

  return (
    <>
      <Navegador />
      <Routes>
        <Route 
          path='/home'
          element={<Home />}
        />
        <Route 
          path='/contacto'
          element={<Contacto />}
        />
        <Route 
          path='*'
          element={<NotFound />}
        />

      </Routes>
    </>
  )
}

export default App
