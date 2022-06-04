import '../src/assets/css/App.css';
import React, { useState } from 'react'; 
import Header from './components/Header';
import Juegos from './components/Juegos';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Tunic from './assets/img/Tunic.jpeg';
import Itzay from './assets/img/Banner2.png';

const App=()=> {
  const [carrito, setCarrito] = useState([]);
  const [productos] = useState([
    {codigo:1, nombre: "Tunic",url: Tunic}, 
    {codigo:2, nombre: "Itzay",url: Itzay}
  ]);

  const add_carrito=(_carrito,_nombre)=>{
    let temporal = { ...productos.find((e) => e.codigo === _carrito.codigo)};
    const carritoExiste = carrito.find((e) => e.codigo === _carrito.codigo);

    console.log("existe", carritoExiste)
    console.log("carrito",carrito)

    if(carritoExiste !== undefined)
    {
      carrito.map((arr) => {
        if(arr.codigo === _carrito.codigo)
        {
          arr.cantidad = arr.cantidad + 1;
        }
      });
      setCarrito([...carrito]);
    }
    else
    {
      temporal["cantidad"] = 1;
      setCarrito([...carrito, temporal]);
    }
  }

  let delete_Carrito=(_carrito,_nombre)=>{
    const temporal = carrito.find((e) => e.codigo === _carrito.codigo);

    if(carrito.length > 0 && temporal !== undefined)
    {
      if(temporal.cantidad > 0)
      {
        temporal.cantidad--;
        setCarrito([...carrito]);
      }
      if(temporal.cantidad == 0)
      {
        const Temp = carrito.filter((e) => e.codigo !== _carrito.codigo);
        setCarrito(Temp);
      }
    }
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