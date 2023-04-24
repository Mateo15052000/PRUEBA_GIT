import React, { useState } from "react";

const CambiarImagen = () => {
  const [imagenActual, setImagenActual] = useState(
    "https://via.placeholder.com/300x200?text=Imagen+1"
  );
  const [imagenNueva, setImagenNueva] = useState(
    "https://via.placeholder.com/300x200?text=Imagen+2"
  );

  const cambiarImagen = () => {
    setImagenActual(imagenNueva);
    setImagenNueva(imagenActual);
  };

  return (
    <div>
      <img src={imagenActual} alt="Imagen actual" />
      <button onClick={cambiarImagen}>Cambiar imagen</button>
    </div>
  );
};

export default CambiarImagen;
