# Cabaña Carapé — Guía para Publicar el Sitio

---

## Antes de publicar — Checklist

### 1. Formspree (formulario de contacto)
- [ ] Ir a [formspree.io](https://formspree.io) y crear cuenta gratuita
- [ ] Crear un nuevo formulario
- [ ] Copiar el ID del formulario (ej: `mqkrgvqj`)
- [ ] En `index.html`, reemplazar `YOUR_FORMSPREE_ID` por tu ID real en:
  ```html
  action="https://formspree.io/f/YOUR_FORMSPREE_ID"
  ```

### 2. Fotos de El Campo
- [ ] Subir `elcampo1.jpeg`, `elcampo2.jpeg`, `elcampo3.jpeg`, `elcampo4.jpeg` a la carpeta `images/`
- Si usas menos de 4 fotos, avisa para ajustar el diseño

### 3. Favicon (opcional pero recomendado)
- [ ] Crear un favicon (ícono de 32x32 o 16x16) a partir del logo
- [ ] Guardar como `favicon.ico` en la raíz del proyecto
- [ ] Agregar en `<head>` de `index.html`:
  ```html
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  ```

### 4. Revisión final
- [ ] Probar el formulario en español e inglés
- [ ] Revisar todos los links (Instagram, WhatsApp)
- [ ] Probar en móvil (responsive)
- [ ] Verificar que todas las imágenes cargan correctamente

---

## Opciones para publicar

### Opción A: Netlify (recomendado, gratis)
1. Crear cuenta en [netlify.com](https://netlify.com)
2. Arrastrar la carpeta `cabana-carape` a Netlify Drop
3. O conectar con Google Drive si tienes integración
4. Obtendrás una URL como `random-name.netlify.app`
5. Puedes cambiar el nombre a `cabanacarape.netlify.app` (si está disponible)

### Opción B: Vercel (gratis)
1. Crear cuenta en [vercel.com](https://vercel.com)
2. Importar o subir el proyecto
3. Deploy automático

### Opción C: GitHub Pages (gratis)
1. Crear repositorio en GitHub
2. Subir los archivos de `cabana-carape`
3. En Settings → Pages → Source: main branch
4. URL: `tu-usuario.github.io/nombre-repo`

### Opción D: Dominio propio — cabanacarape.com
1. Publicar el sitio en Netlify (o Vercel)
2. En Netlify: Site settings → Domain management → Add custom domain
3. Ingresar `cabanacarape.com`
4. Configurar DNS en tu registrador de dominio según las instrucciones de Netlify (registros A o CNAME)

---

## Recomendaciones adicionales

### SEO
- El `<title>` y `<meta name="description">` ya están configurados
- Considera agregar meta tags para redes sociales (Open Graph) para que al compartir el link se vea bien en WhatsApp/Instagram

### Analytics (opcional)
- Google Analytics para ver visitas y comportamiento
- O Plausible/Umami para opciones más simples y respetuosas con la privacidad

### Seguridad
- El sitio es estático (HTML/CSS/JS) — no hay base de datos ni backend propio
- Formspree maneja los envíos del formulario de forma segura

### Mantenimiento
- Para cambiar fotos: reemplazar archivos en `images/` con el mismo nombre
- Para cambiar textos: editar `index.html` o `translations.js`
- Para cambiar estilos: editar `styles.css`

---

## Resumen de archivos del proyecto

```
cabana-carape/
├── index.html          # Contenido principal
├── styles.css          # Estilos
├── script.js           # Interactividad
├── translations.js     # Textos ES/EN
├── images/
│   ├── logo.png        # Logo (ya agregado)
│   ├── hero.jpeg
│   ├── gallery-1.jpeg ... gallery-5.jpeg
│   ├── activity-1.jpeg ... activity-9.jpeg
│   ├── elcampo1.jpeg ... elcampo4.jpeg  # Por subir
│   └── about.jpeg
└── README.md
```
