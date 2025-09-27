import { useState } from "react";

function Colores(){
    const colores = ['#ff0000ff', '#2600ffff', '#00ff15ff', '#fbff00ff', '#6700a3ff'];

    const [colorDeBotones, setColorDeBotones] = useState(colores);
    const [mensaje, setMensaje] = useState("");

    const manejarClickEnElBoton = (index) => {
        const nuevosColores = colorDeBotones.map(() => {
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        return colores[indiceAleatorio];
        });
        setColorDeBotones(nuevosColores);
        // Verifica si todos los colores son iguales
        const todosIguales = nuevosColores.every((c) => c === nuevosColores[0]);

        if (todosIguales) {
          setMensaje("🎉 ¡Ganaste! Todos los colores son iguales 🎉");
        } else {
          setMensaje(""); // Limpia el mensaje si no ganó
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
            {/* Mensaje de victoria */}
            {mensaje && <h2 style={{ color: "#33ff00ff" }}>{mensaje}</h2>}
        </div>
    );
}

export default Colores;