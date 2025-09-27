/*import React from "react";*/
import { useState } from "react";

function Colores(){
    const colores = ['#ff0000ff', '#2600ffff', '#00ff15ff', '#fbff00ff', '#6700a3ff'];

    const [colorDeBotones, setColorDeBotones] = useState(colores);

    const manejarClickEnElBoton = (index) => {

        /*const nuevosColores = [...colorDeBotones];
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        nuevosColores[index] = colores[indiceAleatorio];
        setColorDeBotones(nuevosColores);*/
        const nuevosColores = colorDeBotones.map(() => {
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
                onClick={() => manejarClickEnElBoton(index)}
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