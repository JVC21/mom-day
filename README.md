# 💐 Álbum del Día de las Madres

Un hermoso álbum de fotos interactivo y emotivo creado como regalo para el Día de las Madres. Construido con React y Vite, diseñado para ser rápido, hermoso y lleno de amor.

## 🌟 Características

- **Diseño Premium:** Tipografía elegante (Playfair Display & Dancing Script) y una paleta de colores suave y romántica.
- **Animaciones Suaves:** Lluvia continua de pétalos cayendo (`PetalRain`), apariciones al hacer scroll y efectos *hover* en las fotos.
- **Totalmente Responsivo:** Se adapta perfectamente a pantallas de celulares, tablets y computadoras.
- **Fácil de Personalizar:** Los mensajes, dedicatorias y fotos están centralizados para cambiarlos con facilidad.

## 🛠️ Tecnologías Utilizadas

- [React 19](https://react.dev/) - Biblioteca de UI
- [Vite](https://vitejs.dev/) - Herramienta de construcción (bundler) súper rápida
- CSS Vanilla - Para animaciones fluidas y variables personalizadas (`CSS Modules`/BEM)

## 📸 Estructura de Datos

Si quieres modificar los mensajes o las fotos, puedes hacerlo fácilmente desde la carpeta de datos. Las imágenes deben colocarse en `src/assets/images/`.

El archivo principal de configuración de las fotos es:
```
src/data/albumData.js
```

El mensaje de dedicación final se edita en:
```
src/components/Dedication/Dedication.jsx
```

## 🚀 Cómo ejecutarlo localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Esto abrirá la aplicación en tu navegador (generalmente en `http://localhost:5173`).

3. **Construir para producción (Deploy):**
   ```bash
   npm run build
   ```
   Esto creará una carpeta `dist` que puedes arrastrar a **Netlify** o servir en **GitHub Pages** / **Vercel**.

## ❤️ Dedicatoria
*Creado con mucho amor por Julio, Guido, Happy y Sparky para Jenny Elizabeth.*
