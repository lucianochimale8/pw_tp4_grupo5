import React from "react";
import { useState } from "react";

function Colores(){
    const colores = ['rojo', 'azul', 'verde', 'amarillo', 'morado'];

    const [colorDeBotones, setColorDeBotones] = useState(colores);

    const manejarClickEnElBoton = () => {
    const nuevosColores = colorDeBotonones.map(() => {

        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];

    });

    setColorDeBotones(nuevosColores);
    }

    return(
        <div>
            <h1>Juego de Colores</h1>
            <p>Presiona cualquier botón para cambiar los colores. Si dos o mas coinciden, ganas.</p>
        <div>
            {colorDeBotones.map((color, index) => (
                <button
                key={index}
                onClick={manejarClickEnElBoton}
                style={{backgroundColor: color}}
                >
                    boton{index+1}
                </button>
            ))}
        </div>
        </div>
    );
}

export default Colores;