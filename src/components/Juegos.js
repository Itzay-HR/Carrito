import React from "react";
import '../assets/css/Juegos.css';
import { Button } from 'react-bootstrap'

const Juegos = (props) =>
{
    return(
        <div className="Videojuegos">
            <h2>Juegos</h2>
                  {
                    props.productos.map((juego,a)=>{
                      return (
                         <div className="Juegos" key={a}>
                        
                            <div  className="PosterJuego">
                              <img src={juego.url} alt={juego.nombre} />
                            </div>
                            
                            <div className="Propiedades">
                                <p className="Nombres">Nombre: {juego.nombre}</p>
                                <p className="Nombres">ID: {juego.codigo}</p>
                                <Button variant="success" className="Boton" onClick={() => props.add_carrito(juego, juego.nombre)}>+</Button>
                            </div>
                          </div>)
                   
                    })
                  }
        </div>
    )
}

export default Juegos;