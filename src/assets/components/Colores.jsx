import React from "react";
import { useState } from "react";

function Colores(){
    const colores = ['rojo', 'azul', 'verde', 'amarillo', 'morado'];

    const [colorDeBotones, setColorDeBotones] = useState(colores);
  const [mensaje,setMensaje] = useState("");

    const manejarClickEnElBoton = () => {

       const nuevosColores = colorDeBotones.map(
      () => colores[Math.floor(Math.random() * colores.length)]
    );
    // setColorDeBotones(nuevosColores);
        // const nuevosColores = [...colorDeBotones];

        setColorDeBotones(nuevosColores.reverse());


    }

    return(
        <div>
            <h1>Juego de Colores</h1>
            <p>Presiona cualquier botón para cambiar los colores. Si dos o mas coinciden, ganas.</p>
        <div>
            {colorDeBotones.map((color, index) => (
                <botton
                key={index}
                onClick={manejarClickEnElBoton}
                style={{backgroundColor: color}}
                >
                    boton{index+1}
                </botton>
            ))}
        </div>
        </div>
    );
}

export default Colores;