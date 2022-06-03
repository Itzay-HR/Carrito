import React from "react";
import '../assets/css/Carrito.css';
import { Button } from 'react-bootstrap';

const Carrito = (props) =>
{
    return(
        <div className="Container2">
            {
                Object.keys(props.carrito).length!==0

                ?

                    <div>
                        <h2>Carrito</h2>
                        <div className="Carrito">
                            <p><strong>{props.carrito.nombre}</strong></p>
                            <p><strong>Cantidad: {props.carrito.contador}</strong></p>
                            <div className="Propiedades">
                                <Button className="Boton" onClick={()=>props.delete_Carrito(props.carrito, props.carrito.nombre)}variant="danger">-</Button>
                            </div>
                        </div> 
                    </div>

                :

                    <div className="VacioCarrito">
                        <p>Selecciona un juego dando click en el simbolo de "+"</p>
                    </div>
            }
        </div>
    );
}

export default Carrito;