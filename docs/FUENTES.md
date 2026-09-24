# Fuentes y estado del contenido

Revisión: 23–24 de septiembre de 2026. El prompt maestro aportado por Gustavo define los datos personales públicos y el alcance. Se priorizó el código actual frente a planes o recuerdos de versiones anteriores. No se ejecutaron las suites de pruebas de los proyectos externos.

| Elemento | Estado | Evidencia y decisión |
| --- | --- | --- |
| Perfil, formación y experiencia | verified — proporcionado por el autor | Nombre, Jalisco, correo, grado 2020–2025 y nivel de inglés B1. El promedio se omite por solicitud posterior. IT Support se muestra marzo–mayo 2026 y sin empresa. |
| SIFCAO | verified — autor y capturas originales | Proyecto CFE 2024–2025. Se inspeccionaron vistas de proveedores, proyectos, maquinaria y exportaciones. La mejora de ~15 días a horas es un resultado declarado por el autor, sin porcentaje añadido. |
| POS System API | verified — código público | Controllers/services/repositories, validadores, transacciones de ventas y cancelaciones, inventario, compras, cajas, bcrypt/JWT, sesiones revocables, roles, TOTP y Google OAuth. Hay archivos Jest/Supertest; no se publica un número de pruebas aprobadas. Frontend parcial. |
| Barbería | verified — código público | Entidades Customer, Barber, Service, Appointment y WorkingHour. Disponibilidad en intervalos de 30 minutos, duración del servicio, conflictos, asignación por menor carga y transacción serializable. EF Core, SQL Server, migración y Docker. |
| HappyPet | verified — código y anteproyecto | Kotlin/Java, DAO SQLite, usuarios, pacientes, citas, cámara y BLOB PNG. La documentación planifica correo y edición de citas; el código revisado no completa esos flujos. |
| Gestión de Residencias | verified — código público | VB.NET, .NET 6, WinForms, MySQL y procedimientos almacenados. Formularios de residentes, empresas, proyectos, solicitudes, asesores y asignaciones. Proyecto académico. |
| ProyectoPelículas | verified — código público | C#, .NET 6, WinForms, DTO/DAO, MySQL y archivos MSTest con acceso a base de datos. Se presenta archivado; no se afirma tener demo operativa. |
| Unity | needs confirmation — alcance aportado por el autor | Proyectos académicos 2D/3D con Unity y C#. No se atribuyen mecánicas, escenas ni assets específicos sin material verificable. |
| Certificados | verified — cuatro originales | ASP.NET Core 9 (27 h, septiembre 2026), JavaScript (52.5 h, agosto 2026), FrontEnd (30.5 h, julio 2022), SQL (2 h, agosto 2026). Enlaces copiados de los originales. |
| LinkedIn | verified — historial proporcionado por el usuario | URL literal recuperada de conversaciones previas: `https://www.linkedin.com/in/gustavo-adolfo-macias-munan/`. Incorporada en enlaces sociales y JSON-LD. |
| Cuatro CV originales | unavailable | No se inventaron archivos ni se reutilizaron CV de vacantes anteriores. Selector preparado para activarse al incorporar los PDF. |
| Dominio y despliegue | unavailable | No hay dominio confirmado ni despliegue realizado. El origen SEO se resuelve al compilar. |

## Repositorios revisados

| Proyecto | Repositorio | Revisión inspeccionada |
| --- | --- | --- |
| POS | https://github.com/GustavoMacias607/pos-system | `a689de760bec1ccb50870d4077e3b7c0167f0038` |
| Barbería | https://github.com/GustavoMacias607/Barberia | `7f32441781fc993f04e019c3005b34d95d152292` |
| Residencias | https://github.com/GustavoMacias607/ProyectoResidencia | `a5d2eb5775f64c55bdd72b0e0538a59497c2c104` |
| Películas | https://github.com/GustavoMacias607/ProyectoPeliculas | `30a7433d94fde4f77072ce036990461ffe8bd84c` |
| HappyPet | https://github.com/GustavoMacias607/AndroidStudio/tree/master/VeterinariaHappyPet | Subárbol `c8a8ac5e4c4c9d84db89f8a4ec1b5187ea763768` |

La revisión fue de archivos seleccionados y árbol del repositorio, no una auditoría de seguridad ni una ejecución completa de cada aplicación.

## Decisiones que corrigen versiones anteriores

- Barbería usa `WorkingHour`; no se muestran `BusinessHours` o `BarberSchedule` como entidades implementadas. Se revisaron `StartAt` y `DurationMinutes`, con fin calculado, y estados Confirmed/Completed/Cancelled.
- El proyecto Barberia.Tests es configuración inicial y Barberia.Web conserva una página inicial. No se presentan como suite o frontend terminados.
- HappyPet implementa registro/listado de citas, fotografías y edición de pacientes. El anteproyecto no prueba que todos sus flujos estén implementados.
- SIFCAO usa PHP, jQuery y AJAX sobre HTTP. No se le atribuyen WebSockets, Clean Architecture ni una migración tecnológica.
- Los números de tests de conversaciones anteriores no sustituyen una ejecución actual verificable.

## Procedencia de las imágenes incluidas

| Archivo en el proyecto | Original suministrado | Uso |
| --- | --- | --- |
| `public/projects/sifcao/catalogo-maquinaria.png` | `9a3d453e-2be9-4254-af3b-63f179416b99.png` | Captura real del catálogo, Home y detalle |
| `public/projects/sifcao/reporte-excel.png` | `e88f093e-5e2c-441f-b32e-c295b8881cdb.png` | Exportación real a Excel |
| `public/projects/happypet/diagrama-pantallas.png` | `Diagrama ultimo.png` | Anteproyecto, con leyenda de alcance |

Se conservaron las imágenes originales sin reconstruir interfaces ni inventar screenshots. Los demás visuales se identifican como diagramas conceptuales. Se revisaron también las capturas de ICM, proyectos, un boceto de tarjeta y salida PDF; no se añadieron todas para evitar duplicar información.
