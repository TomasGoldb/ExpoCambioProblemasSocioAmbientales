# 📋 Instrucciones de Instalación

## Opción 1: Con Node.js (Recomendado)

### Paso 1: Instalar Node.js
1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión LTS (Long Term Support)
3. Instala Node.js siguiendo las instrucciones del instalador
4. Verifica la instalación abriendo una terminal y ejecutando:
   ```bash
   node --version
   npm --version
   ```

### Paso 2: Instalar dependencias
1. Abre una terminal en la carpeta del proyecto
2. Ejecuta:
   ```bash
   npm install
   ```

### Paso 3: Ejecutar la aplicación
```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

## Opción 2: Sin Node.js (Versión Standalone)

Si no puedes instalar Node.js, puedes usar la versión HTML standalone:

1. Abre el archivo `index-standalone.html` en tu navegador
2. La aplicación funcionará completamente sin necesidad de servidor

## 🚨 Solución de Problemas

### Error: "node no se reconoce como comando"
- Significa que Node.js no está instalado o no está en el PATH
- Reinstala Node.js y asegúrate de marcar la opción "Add to PATH" durante la instalación

### Error: "npm no se reconoce como comando"
- Reinicia la terminal después de instalar Node.js
- Si persiste, reinstala Node.js

### Error de puerto en uso
- Si el puerto 3000 está ocupado, la aplicación se abrirá en otro puerto automáticamente
- Sigue las instrucciones en la terminal

## 📞 Ayuda

Si tienes problemas con la instalación:
1. Verifica que tienes permisos de administrador
2. Desactiva temporalmente el antivirus
3. Usa la versión standalone como alternativa

---

**¡Disfruta de tu generador de personajes ambientales! 🌱**
