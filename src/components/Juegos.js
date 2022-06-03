import React from "react";
import '../assets/css/Juegos.css';
import Button from 'react-bootstrap/Button';

const Juegos = (props) =>
{
    return(
        <div className="Videojuegos">
            <h2>Juegos</h2>
                  {
                    props.productos.map((j,a)=>{
                      return (
                         <div className="Juegos" key={a}>
                        
                            <div  className="PosterJuego">
                              <img src={j.url} alt={j.nombre} />
                            </div>
                            
                            <div className="Propiedades">
                                <p className="Nombres">{j.nombre}</p>
                                <Button variant="success" className="Boton" onClick={() => props.add_carrito(j,j.nombre)}>+</Button>
                            </div>
                          </div>)
                   
                    })
                  }
        </div>
    )
}

export default Juegos;