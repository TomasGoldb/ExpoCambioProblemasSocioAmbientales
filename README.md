# 🌍 Generador de Personajes Ambientales

Una aplicación React que genera personajes aleatorios con características ambientales y sociales, siguiendo reglas de coherencia específicas.

## 🚀 Características

- **Generación aleatoria**: Cada personaje se genera con características únicas
- **Reglas de coherencia**: Las características se relacionan entre sí de manera lógica
- **Diseño ambiental**: Interfaz moderna con tema ambiental
- **Responsive**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Animaciones suaves**: Efectos visuales atractivos

## 📋 Categorías de Personajes

### 📅 Edad
- Niña / Niño
- Adolescente
- Persona adulta (20–60)
- Persona mayor (60+)
- Persona gestante

### 🏠 Lugar de Residencia
- Ciudad grande (zona céntrica)
- Ciudad grande (zona periférica)
- Pueblo pequeño
- Comunidad rural
- Zona costera
- Zona de montaña
- Asentamiento informal

### 💼 Ocupación
- Agricultura / pesca
- Trabajador/a industrial
- Empleo formal de oficina
- Desempleado/a
- Estudiante (exclusivo para niños y adolescentes)
- Trabajo forzado (exclusivo para niños)

### ⚡ Servicios Básicos
- Acceso a agua potable y saneamiento seguro
- Acceso parcial a agua y saneamiento
- Sin acceso estable a agua y saneamiento
- Energía eléctrica estable
- Energía eléctrica inestable o inexistente
- Acceso a internet
- Sin acceso a internet

### 🏘️ Condición de Vivienda
- Casa sólida con buen aislamiento
- Vivienda precaria
- Vivienda temporaria / refugio
- Sin vivienda estable

## 🛠️ Instalación

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona o descarga el proyecto**
   ```bash
   git clone <url-del-repositorio>
   cd personajes-ambientales
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia la aplicación**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🎮 Uso

1. **Generar personaje**: Haz clic en el botón "🎲 Generar Nuevo Personaje"
2. **Ver características**: Cada personaje mostrará todas sus características organizadas por categorías
3. **Generar otro**: Puedes generar tantos personajes como desees

## 🔧 Reglas de Coherencia

La aplicación implementa las siguientes reglas para mantener la coherencia:

- **Niños y adolescentes** solo pueden ser estudiantes, tener trabajo forzado o estar desempleados
- **Empleo formal de oficina** no está disponible en zonas de montaña o costeras
- **Acceso a agua potable** siempre está disponible en ciudades grandes
- **Energía eléctrica estable** es más común en ciudades y pueblos
- **Acceso a internet** es más probable en ciudades grandes
- **Condición de vivienda** varía según el lugar de residencia

## 🎨 Tecnologías Utilizadas

- **React 18**: Framework principal
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6+**: Lógica de generación aleatoria
- **Responsive Design**: Diseño adaptable a diferentes pantallas

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🤝 Contribuir

Si quieres contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Si tienes preguntas o sugerencias, no dudes en contactar.

---

**¡Disfruta generando personajes ambientales únicos! 🌱**
