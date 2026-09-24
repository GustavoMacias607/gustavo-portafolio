# Validación de entrega

Fecha: 24 de septiembre de 2026. Revisión del portfolio compilado como exportación estática de Next.js.

## Comprobaciones automáticas

| Comando | Resultado |
| --- | --- |
| `npm run lint` | Aprobado, sin errores ni advertencias de ESLint |
| `npm run build` | Aprobado; compilación de producción y comprobación TypeScript |
| `npm run verify` | Aprobado: 18 páginas de contenido, 404 bilingüe y 470 enlaces internos |

Los registros están en `lint.log`, `build.log` y `verify.log`. La compilación final se regeneró desde una salida vacía. El servidor de previsualización sirvió los archivos de `out/`.

La validación de HTML comprueba un H1 y un landmark principal por página, idioma, títulos, descripciones, Open Graph, Twitter cards, canonical, hreflang, IDs únicos, presencia de alt, anclas, recursos enlazados, sitemap y robots. También comprueba `noopener` en enlaces que abren otra pestaña y la dirección de correo de contacto.

Las 18 páginas son las dos Home, las dos listas de proyectos y los siete casos de estudio en ambos idiomas. El sitemap las incluye. Los 11 destinos externos se comprobaron en el marcado; esta prueba no certifica su disponibilidad remota.

## Responsive

Se revisó el contenido en un iframe de prueba con estos anchos de viewport. El área útil descuenta la barra de desplazamiento del navegador.

| Ancho del viewport | Área útil / ancho del documento | Desbordamiento horizontal |
| --- | --- | --- |
| 360 px | 345 / 345 px | No |
| 390 px | 375 / 375 px | No |
| 768 px | 753 / 753 px | No |
| 1024 px | 1009 / 1009 px | No |
| 1440 px | 1425 / 1425 px | No |
| 1920 px | 1905 / 1905 px | No |

También se revisaron las listas de proyectos y los detalles de Barbería y HappyPet, con atención a diagramas, textos y galerías. En móvil, los proyectos y las certificaciones pasan a una columna. El archivo de prueba no forma parte del proyecto ni de la exportación entregada.

## Interacciones y accesibilidad

- Menú móvil: apertura, cierre con Escape, apertura con Enter y cierre al elegir una sección.
- Selector de CV: apertura y cierre con Escape; opciones sin PDF se muestran pendientes y ofrecen solicitud por correo.
- Cambio ES/EN: conserva la ruta y el ancla con JavaScript; revisado en navegación entre idiomas.
- Enlaces de contacto: GitHub, LinkedIn y correo presentes; dirección exacta de LinkedIn recuperada del historial aportado por el usuario.
- HTML semántico, enlace para saltar al contenido, foco visible, etiquetas de controles y decoraciones ocultas a tecnologías de asistencia revisados.
- Controles principales con áreas de interacción de al menos 44 px; correo de contacto con altura mínima de 48 px.
- Contraste blanco/botón principal: 5.38:1; en hover: 4.95:1. También se revisaron los tonos secundarios sobre sus fondos oscuros.
- La regla CSS `prefers-reduced-motion: reduce` desactiva animaciones, transiciones y desplazamiento suave. Se inspeccionó el código; no se simuló la preferencia del sistema operativo.
- Sin errores de la aplicación observados en la consola durante la revisión de producción. Los mensajes de extensiones del entorno de revisión se excluyen.

No se declara una auditoría WCAG completa, pruebas con lector de pantalla ni puntuaciones Lighthouse/Core Web Vitals.

## Cambios solicitados y límites de entrega

- Promedio universitario eliminado del contenido publicado.
- Formación académica en una franja propia y tres certificaciones principales en tarjetas; SQL queda en formación adicional.
- Inglés B1 visible en Sobre mí / About, con traducción ES/EN.
- LinkedIn incorporado en portada, contacto y datos estructurados.
- Los cuatro PDF originales de CV siguen pendientes. La apertura y descarga de archivos reales solo podrán validarse al incorporarlos y regenerar el build. No se crearon currículos sustitutos.
- No se ejecutaron las aplicaciones externas descritas en los casos de estudio. El alcance de su inspección está en `FUENTES.md`.
- El proyecto está preparado para GitHub → Vercel. No se creó un repositorio remoto ni se realizó un despliegue público. El build local usa origen localhost y `noindex`; el README explica cómo resolver el origen público al desplegar.
