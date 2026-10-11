import { useState } from 'react'
import './App.css'

function App() {
  const listaPalabras = ["Accesibilidad", "Estándar",
    "WAI-ARIA", "WCAG", "Lectores", "Pantalla", "Inclusión", 
    "Usabilidad", "Discapacidad", "Diversidad", "Semántica", 
    "HTML", "CSS", "Teclado", "Contraste", "Legibilidad",
    "Navegación", "Subtítulos", "Transcripción", "Alternativo",
    "Imágenes", "Formularios", "Etiquetas", "Compatibilidad",
    "Tecnología", "Autonomía", "Perceptible", "Operable",
    "Comprensible", "Robusto", "Diseño","Interfaz", "Experiencia",
    "Adaptabilidad", "Accesible", "ARIA", "Enfoque", "Interacción",
    "Lectura", "Lenguaje", "Audio", "Vídeo", "Magnificación",
    "Color", "Movilidad", "Cognición", "Equidad","Participación",
    "Responsive", "Validación"
  ];  
  //Estado para llevar el control de cuál palabra estamos viendo (empezamos en el índice 0)
  const [indiceActual, setIndiceActual] = useState(0);

  const palabraAnterior = () => {
    setIndiceActual((prevIndice) => 
      prevIndice === 0 ? listaPalabras.length - 1 : prevIndice - 1
    );
  };

  const palabraAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * listaPalabras.length);
    setIndiceActual(indiceAleatorio);
  };

  const palabraSiguiente = () => {
    setIndiceActual((prevIndice) => (prevIndice + 1) % listaPalabras.length);
  };

  return (
    <>
      {/* 
        Aquí aplicamos el estado de accesibilidad: 
        aria-live="polite" le avisa al lector de pantalla 
        que este texto cambia dinámicamente.
      */}
      <p id = "palabra- actual" role = "status"
      aria-live="polite">{listaPalabras[indiceActual]}</p>

      {/* 
        Rol 'toolbar': 
        Agrupa los botones indicando que forman una barra de controles conjunta.
      */}
      <div className='contenedor-botones' role="toolbar">
          <button onClick={palabraAnterior}
          aria-controls="palabra-actual" >Anterior</button>
          <button onClick={palabraAleatoria}
          aria-controls="palabra-actual">Aleatoria</button>
          <button onClick={palabraSiguiente}
          aria-controls="palabra-actual">Siguiente</button>
      </div>
    </>
  )
}

export default App
