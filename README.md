# Gustavo Macías — Portfolio

Portafolio bilingüe de un Software Developer, con español en `/` e inglés en `/en/`. Incluye siete casos de estudio, experiencia, stack, formación sin promedio, inglés B1, LinkedIn, contacto y selector de CV. Diseño oscuro con una identidad orbital sutil, fuentes locales y visuales CSS/SVG. Las capturas originales de SIFCAO y el diagrama académico de HappyPet se incluyen como archivos locales.

## Stack y requisitos

Next.js App Router, React, TypeScript, Tailwind CSS 4 y Lucide. Exportación estática: no necesita base de datos ni un servidor de aplicación en producción.

- Node.js 22 o superior; validado con Node 24.
- npm y acceso al registro de paquetes para la instalación inicial.
- Las versiones exactas están fijadas en `package-lock.json`.

## Instalación y desarrollo

Descomprime el proyecto y abre una terminal dentro de `gustavo-portfolio`:

```bash
npm ci
npm run dev
```

Abre `http://localhost:4173`. El script de desarrollo inicia Next.js y admite `--port` para cambiar el puerto.

## Build de producción

```bash
npm run lint
npm run build
npm run verify
npm start
```

El ZIP de entrega incluye `out/` ya compilado para una primera revisión local. `npm run build` regenera `out/`. `npm start` sirve esa exportación en el puerto 4173; `npm run preview` es un alias. No uses `next start` para este proyecto, porque está configurado con `output: 'export'`. Para detener cualquier servidor local, pulsa Ctrl+C.

`npm run verify` comprueba todas las páginas generadas, enlaces internos, anclas, archivos enlazados, idiomas, encabezados, metadatos, sitemap y 404. No sustituye la revisión visual ni comprueba la disponibilidad remota de GitHub o Udemy.

## Estructura

| Ruta | Responsabilidad |
| --- | --- |
| `src/app/(es)/` | Home y proyectos en español |
| `src/app/en/` | Home y proyectos en inglés |
| `src/app/global-not-found.tsx` | Página 404 bilingüe |
| `src/app/globals.css` | Colores, tipografía, composición, breakpoints y movimiento |
| `src/content/site.ts` | Perfil, textos, experiencia, stack y certificados |
| `src/content/projects.ts` | Datos y casos de estudio de los siete proyectos |
| `src/components/` | Componentes compartidos y visuales |
| `src/lib/metadata.ts` | SEO, origen público y JSON-LD |
| `src/lib/resumes.ts` | Detección de los cuatro PDF durante el build |
| `public/projects/` | Capturas y diagramas originales |
| `public/resume/` | Ubicación de los CV originales |
| `scripts/verify-export.mjs` | Validación de la exportación |
| `docs/` | Fuentes revisadas y resultados de QA |

## Editar o añadir proyectos

Edita `src/content/projects.ts`. Cada entrada tiene `slug`, nombre, estado, categoría, descripción, stack, contexto, participación, indicadores y secciones. Los textos usan `b(es, en)`.

- `featured: true` lo muestra en Home y en la selección principal.
- `featured: false` lo incluye en los proyectos secundarios.
- Conserva los `slug` publicados para no romper enlaces compartidos.
- `github` es opcional: si no hay repositorio público, omite el campo.
- `kind` selecciona un visual reutilizable. Si necesitas un visual nuevo, amplía su tipo y `ProjectVisual`.
- Las rutas de detalle y el sitemap se generan automáticamente a partir de los datos.

No añadas métricas, demos ni funciones que no puedas respaldar. `docs/FUENTES.md` explica las diferencias entre código revisado, información proporcionada y datos pendientes.

## Añadir capturas

Guarda las imágenes reales en `public/projects/<slug>/` y añade un elemento a `images`:

```ts
images: [{
  src: '/projects/mi-proyecto/pantalla.webp',
  width: 1440,
  height: 900,
  alt: b('Descripción concreta en español.', 'Specific description in English.'),
  caption: b('Contexto de la captura.', 'Screenshot context.'),
}],
```

Usa las dimensiones reales y archivos optimizados. Las imágenes tienen reserva de espacio, carga diferida y enlace para abrirlas completas. Las imágenes de SIFCAO y HappyPet incluidas conservan los píxeles originales. El diagrama de HappyPet se identifica como anteproyecto: sus flujos planificados no se presentan como funcionalidades terminadas.

## CV originales

Añade estos archivos exactamente a `public/resume/`:

| Perfil | Español | Inglés |
| --- | --- | --- |
| Software Development | `software-development-es.pdf` | `software-development-en.pdf` |
| IT / Infrastructure | `it-infrastructure-es.pdf` | `it-infrastructure-en.pdf` |

Vuelve a ejecutar el build después de añadirlos. El menú detecta los archivos existentes y habilita **Abrir PDF** y **Descargar**. El botón del Hero abre Software Development en el idioma de la página. Sin su PDF, muestra el selector y la alternativa de solicitarlo por correo. No hay enlaces a archivos inexistentes.

Los cuatro originales no se suministraron como parte de este encargo. No se sustituyeron por currículos anteriores preparados para vacantes específicas.

## Idiomas

Español es el idioma predeterminado. Las rutas inglesas usan el prefijo `/en`. El cambio de idioma mantiene el proyecto y, cuando JavaScript está cargado, el ancla de la sección. Los `id` de secciones son iguales en ambos idiomas. Cambiar el contenido de una entrada requiere actualizar sus dos traducciones.

Los nombres oficiales de productos, tecnologías y certificados se conservan. Cada documento declara su idioma en `<html lang>`.

## GitHub → Vercel

1. Crea un repositorio en tu cuenta de GitHub y sube el contenido de esta carpeta. Incluye `package-lock.json`; no subas `node_modules`, `.next` ni `out`.
2. En Vercel, importa ese repositorio como proyecto.
3. Selecciona Next.js como framework y la carpeta que contiene `package.json` como Root Directory.
4. Usa `npm ci` para instalar y `npm run build` para compilar. La exportación estática queda en `out`.
5. Despliega y comprueba Home, una ruta de detalle, cambio de idioma y una dirección inexistente.

No hay servicios de pago, bases de datos, claves API ni variables obligatorias propias del proyecto. Vercel debe exponer sus variables de sistema durante el build: se usa `VERCEL_PROJECT_PRODUCTION_URL`, o en su defecto `VERCEL_URL`, para generar las URLs SEO.

Si añades un dominio personalizado, configura `profile.siteUrl` en `src/content/site.ts` **o** la variable opcional `NEXT_PUBLIC_SITE_URL` con el origen completo, por ejemplo `https://tu-dominio.com`, y vuelve a desplegar. Este es el único ajuste de origen; no reemplaces manualmente URLs en páginas y sitemap.

Un build local sin origen público usa `http://localhost:4173` y `noindex`, para evitar indexar la previsualización. Tras desplegar, revisa que `robots.txt`, canonical y sitemap usen el dominio público. Si Vercel no expone su URL de sistema, configura `NEXT_PUBLIC_SITE_URL` con la URL asignada y vuelve a desplegar.

El proyecto se entrega preparado para ese flujo; **no se ha creado un repositorio remoto ni publicado en Vercel**.

## Accesibilidad y rendimiento

Menú móvil nativo, navegación por teclado, enlace para saltar al contenido, foco visible, etiquetas de controles, alt de imágenes, un H1 por página y movimiento reducido con `prefers-reduced-motion`. Los visuales decorativos no se anuncian a lectores de pantalla. No hay formularios ni rastreadores de terceros. El contacto abre el cliente de correo del visitante.

Las fuentes se sirven desde el propio sitio. El efecto orbital usa SVG/CSS, sin WebGL ni vídeos. La mayor parte del contenido se genera en el servidor durante el build; los componentes cliente se limitan a navegación y selector de CV. No se declara una puntuación Lighthouse ni una certificación WCAG sin auditoría formal.

## Pendientes de contenido

- Los cuatro PDF originales de CV.
- Capturas de ejecución de HappyPet, escritorio y Unity si quieres ampliar sus galerías. Actualmente se usan los diagramas o la documentación disponible.

## English quick start

Run `npm ci`, then `npm run dev`. For production: `npm run lint && npm run build && npm run verify`, then `npm start`. Content and translations live in `src/content/`; resume PDFs belong in `public/resume/`. The project is a static Next.js export, ready to upload to GitHub and deploy through Vercel. It has not been published. See `docs/QA.md` for the validation scope and remaining content inputs.
