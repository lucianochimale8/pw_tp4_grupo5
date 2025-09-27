import { useState } from "react";

function Colores(){
    // arreglo de colores
    const colores = ['#ff0000ff', '#2600ffff', '#00ff15ff', '#fbff00ff', '#6700a3ff'];
    // useStates
    const [colorDeBotones, setColorDeBotones] = useState(colores);
    const [mensaje, setMensaje] = useState("");
    // Funcion que manejara el cambio de color dentro del boton
    const manejarClickEnElBoton = (index) => {
        // .map recorre todos los elementos del arreglo
        const nuevosColores = colorDeBotones.map(() => {
            // indice devuelve un numero entero entre los espacios del arreglo
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];
        });
        // Cambiar el color segun el valor del nuevo color
        setColorDeBotones(nuevosColores);
        // .every comprueba si todos los elementos del array cumplen cierta condicion
        const todosIguales = nuevosColores.every((c) => c === nuevosColores[0]);
        // Si todos los colores son de indice igual (todos iguales) mostrar mensaje atravez de SetMensaje
        if (todosIguales) {
          setMensaje("¡Ganaste! Todos los colores son iguales!");
        } else {
          setMensaje(""); // Si no limpia el mensaje si no ganó
        }
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
            {/* Mensaje de victoria , si hay mensaje mostrar el mensaje*/}
            {mensaje && <h2 style={{ color: "#33ff00ff" }}>{mensaje}</h2>}
        </div>
    );
}

export default Colores;