# Subir a GitHub y conectar con Netlify

## Paso 1: Subir el código a GitHub

Abre la **Terminal** y ejecuta estos comandos :

```bash
cd "/Users/felipeclerici/Library/CloudStorage/GoogleDrive-fclerici@dlocal.com/My Drive/cabana-carape"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial commit - Cabaña Carapé website"

# Conectar con tu repositorio de GitHub (cambia la URL por la tuya)
git remote add origin https://github.com/felipeclerici-ui/Cabanacarape.git

# Subir el código
git branch -M main
git push -u origin main
```

**Importante:** Si tu repositorio ya tiene archivos (ej. README creado en GitHub), puede que necesites hacer `git pull origin main --rebase` antes del push, o usar `git push -u origin main --force` (solo si estás seguro).

---

## Paso 2: Conectar Netlify a GitHub

1. Entra a [app.netlify.com](https://app.netlify.com)
2. Clic en **Add new site** → **Import an existing project**
3. Elige **GitHub** y autoriza Netlify si te lo pide
4. Selecciona tu repositorio `cabana-carape`
5. Configuración:
   - **Base directory:** `cabana-carape` (o déjalo vacío si el repo es solo el sitio)
   - **Build command:** vacío (sitio estático)
   - **Publish directory:** `.` o `/`
6. Clic en **Deploy site**

---

## Paso 3: Actualizaciones futuras

Cuando cambies algo en el código:

```bash
cd "/Users/felipeclerici/Library/CloudStorage/GoogleDrive-fclerici@dlocal.com/My Drive/cabana-carape"

git add .
git commit -m "Descripción del cambio"
git push
```

Netlify desplegará automáticamente en unos segundos.

---

## Paso 4: Agregar el dominio cabanacarape.com

1. En Netlify: **Site settings** → **Domain management** → **Add custom domain**
2. Escribe `cabanacarape.com`
3. Sigue las instrucciones para configurar DNS en tu registrador de dominio
