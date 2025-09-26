import React from "react";

function Saludo({nombre}) {
  return (
    <div className="p-4 bg-blue-200 rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold">Hola {nombre}</h1>
      <p className="text-gray-700">Nuestro primer saludo en react </p>
    </div>
  );
}

export default Saludo;