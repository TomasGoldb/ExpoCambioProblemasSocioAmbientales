import React, { useState } from 'react';
import './App.css';

function App() {
  const [personaje, setPersonaje] = useState(null);

  // Definición de categorías y sus valores
  const categorias = {
    edad: [
      { nombre: "Niña / Niño", ocupaciones: ["estudiante", "trabajo forzado"] },
      { nombre: "Adolescente", ocupaciones: ["estudiante", "trabajo forzado"] },
      { nombre: "Persona adulta (20–60)", ocupaciones: ["Agricultura / pesca", "Trabajador/a industrial", "Empleo formal de oficina", "Desempleado/a"] },
      { nombre: "Persona mayor (60+)", ocupaciones: ["Agricultura / pesca", "Trabajador/a industrial", "Empleo formal de oficina", "Desempleado/a"] },
      { nombre: "Mujer embarazada", ocupaciones: ["Agricultura / pesca", "Trabajador/a industrial", "Empleo formal de oficina", "Desempleado/a"] }
    ],
    lugarResidencia: [
      "Ciudad grande",
      "Pueblo pequeño",
      "Zona costera",
      "Zona de montaña",
      "Asentamiento informal"
    ],
    ocupacion: [
      "Agricultura / pesca",
      "Trabajador/a industrial",
      "Empleo formal de oficina",
      "Desempleado/a",
      "Estudiante",
      "Trabajo forzado"
    ],
    serviciosBasicos: [
      "Acceso a agua potable y saneamiento seguro",
      "Acceso parcial a agua y saneamiento",
      "Sin acceso estable a agua y saneamiento",
      "Energía eléctrica estable",
      "Energía eléctrica inestable o inexistente",
      "Acceso a internet",
      "Sin acceso a internet"
    ],
    condicionVivienda: [
      "Casa sólida con buen aislamiento",
      "Vivienda precaria",
      "Vivienda temporaria / refugio",
    ]
  };

  // Función para obtener un elemento aleatorio de un array
  const obtenerAleatorio = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Función para generar un personaje aleatorio
  const generarPersonaje = () => {
    // Generar edad primero
    const edadSeleccionada = obtenerAleatorio(categorias.edad);
    
    // Generar lugar de residencia
    let lugarResidencia = obtenerAleatorio(categorias.lugarResidencia);
    
    // Generar ocupación basada en edad y lugar
    let ocupacion;
    if (edadSeleccionada.nombre.includes("Niña / Niño") || edadSeleccionada.nombre.includes("Adolescente")) {
      ocupacion = obtenerAleatorio(edadSeleccionada.ocupaciones);
    } else {
      // Para adultos, excluir ciertas ocupaciones según el lugar
      let ocupacionesDisponibles = [...categorias.ocupacion];
      
      if (lugarResidencia === "Zona de montaña" || lugarResidencia === "Zona costera") {
        ocupacionesDisponibles = ocupacionesDisponibles.filter(oc => oc !== "Empleo formal de oficina");
      }
      
      ocupacion = obtenerAleatorio(ocupacionesDisponibles);
    }

    // Generar servicios básicos con lógica condicional
    let serviciosBasicos = [];
    
    // Agregar servicios de agua según el lugar
    if (lugarResidencia.includes("Ciudad grande")) {
      serviciosBasicos.push("Acceso a agua potable y saneamiento seguro");
    } else if (lugarResidencia === "Pueblo pequeño" || lugarResidencia === "Comunidad rural") {
      serviciosBasicos.push(obtenerAleatorio([
        "Acceso parcial a agua y saneamiento",
        "Sin acceso estable a agua y saneamiento"
      ]));
    } else {
      serviciosBasicos.push("Sin acceso estable a agua y saneamiento");
    }

    // Agregar servicios de energía
    if (lugarResidencia.includes("Ciudad grande") || lugarResidencia === "Pueblo pequeño") {
      serviciosBasicos.push("Energía eléctrica estable");
    } else {
      serviciosBasicos.push(obtenerAleatorio([
        "Energía eléctrica estable",
        "Energía eléctrica inestable o inexistente"
      ]));
    }

    // Agregar servicios de internet
    if (lugarResidencia.includes("Ciudad grande")) {
      serviciosBasicos.push("Acceso a internet");
    } else {
      serviciosBasicos.push(obtenerAleatorio([
        "Acceso a internet",
        "Sin acceso a internet"
      ]));
    }

    // Generar condición de vivienda
    let condicionVivienda;
    if (lugarResidencia === "Asentamiento informal") {
      condicionVivienda = obtenerAleatorio([
        "Vivienda precaria",
        "Vivienda temporaria / refugio",
        "Sin vivienda estable"
      ]);
    } else if (lugarResidencia.includes("Ciudad grande")) {
      condicionVivienda = obtenerAleatorio([
        "Casa sólida con buen aislamiento",
        "Vivienda precaria"
      ]);
    } else {
      condicionVivienda = obtenerAleatorio(categorias.condicionVivienda);
    }

    const nuevoPersonaje = {
      edad: edadSeleccionada.nombre,
      lugarResidencia: lugarResidencia,
      ocupacion: ocupacion,
      serviciosBasicos: serviciosBasicos,
      condicionVivienda: condicionVivienda
    };

    setPersonaje(nuevoPersonaje);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🌍 Generador de Personajes Ambientales</h1>
        
        <div className="centered">
          <button className="btn" onClick={generarPersonaje}>
            🎲 Generar Nuevo Personaje
          </button>
        </div>

        {personaje && (
          <div className="card">
            <h2 className="subtitle">👤 Personaje Generado</h2>
            <div className="personaje-info">
              <div className="category">
                <h3>📅 Edad</h3>
                <div className="category-value">{personaje.edad}</div>
              </div>

              <div className="category">
                <h3>🏠 Lugar de Residencia</h3>
                <div className="category-value">{personaje.lugarResidencia}</div>
              </div>

              <div className="category">
                <h3>💼 Ocupación</h3>
                <div className="category-value">{personaje.ocupacion}</div>
              </div>

              <div className="category">
                <h3>⚡ Servicios Básicos</h3>
                {personaje.serviciosBasicos.map((servicio, index) => (
                  <div key={index} className="category-value" style={{ marginBottom: '10px' }}>
                    {servicio}
                  </div>
                ))}
              </div>

              <div className="category">
                <h3>🏘️ Condición de Vivienda</h3>
                <div className="category-value">{personaje.condicionVivienda}</div>
              </div>
            </div>
          </div>
        )}

        {!personaje && (
          <div className="card">
            <div className="centered">
              <h2 className="subtitle">🎯 Instrucciones</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                Haz clic en el botón "Generar Nuevo Personaje" para crear un personaje aleatorio 
                con características ambientales y sociales. Cada personaje tendrá diferentes 
                combinaciones de edad, lugar de residencia, ocupación, acceso a servicios básicos 
                y condición de vivienda, siguiendo las reglas de coherencia establecidas.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
