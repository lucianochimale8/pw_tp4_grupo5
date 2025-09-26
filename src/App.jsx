
import React from "react";
import Saludo from "./assets/components/Saludo";

function App() {
    
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <Saludo nombre={nombre} />
    </div>
  );
}

export default App;