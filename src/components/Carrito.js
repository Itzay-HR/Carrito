import React from "react";
import '../assets/css/Carrito.css';
import { Button } from 'react-bootstrap'

const Carrito = (props) =>
{
    return(
        <div className="Container2">
            <h2>Carrito</h2>
            {
                Object.keys(props.carrito).length!==0

                ?
                    props.carrito.map((a,index)=>
                        <div key={index}>
                            <div className="Carrito">
                                <p><strong>{a.nombre}</strong></p>
                                <p><strong>Cantidad: {a.cantidad}</strong></p>
                                <div className="Propiedades">
                                    <Button variant="danger" className="Boton" onClick={()=>props.delete_Carrito(a, a.nombre)}>-</Button>
                                </div>
                            </div> 
                        </div>
                    )
                :

                    <div className="VacioCarrito">
                        <p>Selecciona un juego dando click en el simbolo de "+"</p>
                    </div>
            }
        </div>
    );
}

export default Carrito;