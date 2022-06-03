import '../src/assets/css/App.css';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Juegos from './components/Juegos';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Tunic from './assets/img/Tunic.jpeg';

const App=()=> {
  const [contador, setContador] = useState(0);
  const [carrito, setCarrito] = useState([0]);
  const [productos] = useState([{codigo:1, nombre: "Tunic",  url: Tunic}]);

  const add_carrito=(_carrito,_nombre)=>{
    setContador(contador + 1);
    const temp={
      codigo:_carrito.codigo,
      nombre:_nombre,
      contador:contador+1,
    }
    setCarrito(temp);
  }

  let delete_Carrito=(_carrito,_nombre)=>{
    setContador(contador-1);
    const temp={
      codigo:_carrito.codigo,
      nombre:_nombre,
      contador:contador - 1,
    }
    setCarrito(temp);
  } 

  return (
    <div className="App">
      <Header/>

      <div className='Container'>
        <Juegos
          productos={productos}
          add_carrito={add_carrito}
        />
        <Carrito
          carrito={carrito}
          delete_Carrito={delete_Carrito}
        />
      </div>

      <Footer/>
    </div>
  );
}

export default App;