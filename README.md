Enlace al scalidraw (Máquina de estado finito):
https://excalidraw.com/#json=YbF_A7ISNs3vLGCvKSCF3,lDGJdwUF3RhgjqsRTLj-7g

Enlace al asistente: https://claude.ai/share/c88d3908-f7ce-4aad-af42-2f903bdbbf1a 


Se pueden agregar los CU:
- CU-11 Recuperar contraseña
- CU-16 Registrar cobro de atención, presencial y con comprobante; los pagos en línea siguen fuera del alcance.
- CU-18 Emitir receta médica



# VetCare

**Sistema web de gestión de citas y pacientes para la clínica veterinaria “Huellitas”.**

Proyecto del **primer bimestre de Desarrollo de Aplicaciones Web**. VetCare representa, mediante una interfaz web estática, los procesos de registro de propietarios y mascotas, agendamiento de citas, consulta de agenda e historial clínico, registro de atenciones y administración de veterinarios y servicios.

## Problema y objetivo

La clínica veterinaria **Huellitas**, ubicada en **Quito**, atiende aproximadamente **40 mascotas al día** con **tres veterinarios y una recepcionista**. La gestión manual de citas y expedientes ocasiona duplicaciones, datos incompletos y dificultades para consultar antecedentes clínicos.

El objetivo de VetCare es **diseñar y presentar una interfaz navegable** que modele estos procesos y valide los datos de entrada mediante formularios HTML5. La transacción central representada es **agendar una cita**, vinculando propietario, mascota, servicio, veterinario, fecha y hora.

> **Alcance académico:** esta versión usa únicamente **HTML5 y CSS/CSS3**. No emplea JavaScript, backend, base de datos ni frameworks de CSS. Por tanto, el inicio de sesión, los cambios de estado y las operaciones CRUD son **simulaciones con páginas y datos de ejemplo**, no operaciones persistentes.

## Usuarios

| Rol | Funcionalidades representadas |
| --- | --- |
| **Recepcionista** | Gestionar propietarios y mascotas; agendar, reprogramar y cancelar citas |
| **Veterinario** | Consultar agenda, registrar atención médica y revisar el historial clínico |
| **Administrador** | Gestionar veterinarios y catálogo de servicios |

## Integrantes y distribución del trabajo

| Estudiante | Módulos | Casos de uso | Responsabilidad |
| --- | --- | --- | --- |
| **Luis** | **M1, M2** | CU-01, CU-02 | Acceso simulado, plantilla base, menús por rol y CRUD de propietarios |
| **Jorge** | **M3, M4** | CU-03, CU-04, CU-05 | Mascotas, estructura de historial clínico y gestión de citas |
| **Mayerly** | **M5** | CU-06, CU-07, CU-08 | Agenda del veterinario, atención médica e historial clínico |
| **Anderson** | **M6, M7** | CU-09, CU-10; CU-11 pendiente | Gestión de veterinarios, servicios y alcance adicional de personal sujeto a especificación |



## Módulos del sistema

| ID | Módulo | Entidades de referencia | Operaciones y alcance |
| --- | --- | --- | --- |
| M1 | Acceso y seguridad | Usuario | Inicio de sesión y menú visual por rol (CU-01) |
| M2 | Propietarios | Propietario | CRUD simulado (CU-02) |
| M3 | Mascotas e historia clínica | Mascota, HistoriaClinica | CRUD de mascotas (CU-03); estructura y navegación clínica coordinadas con M5 |
| M4 | Citas | Cita | Agendar, consultar, reprogramar y cancelar (CU-04, CU-05) |
| M5 | Atención clínica | Atencion | Consultar agenda, registrar atención y consultar historial (CU-06, CU-07, CU-08) |
| M6 | Personal | Veterinario, Recepcionista | CRUD de veterinarios (CU-09); CU-11 pendiente de definición |
| M7 | Catálogo de servicios | Servicio | CRUD simulado de servicios y precios (CU-10) |

**Dependencias:** el agendamiento de citas (**M4**) requiere información de **M2, M3, M6 y M7**. **M5** utiliza información de mascotas y citas aportada por **M3 y M4**. La plantilla de **M1** se comparte entre todas las pantallas. La consulta de historial clínico del veterinario corresponde funcionalmente a **M5 (CU-08)**, en coordinación con M3.

## Reglas de negocio principales

- **Propietario:** cédula de 10 dígitos; celular de 10 dígitos iniciado en `09`; correo válido; nombres y apellidos obligatorios de 2 a 50 caracteres, con letras y espacios.
- **Mascota:** pertenece a un propietario; especie **Perro, Gato, Ave, Roedor u Otro**; peso entre **0,1 y 120 kg**, con un decimal; fecha de nacimiento no futura.
- **Citas:** lunes a sábado, de **08:00 a 18:00**, en intervalos de **30 minutos**; no se admiten fechas pasadas. Estados: **Programada, Atendida o Cancelada**; cancelar requiere un motivo de hasta 200 caracteres.
- **Servicios:** nombre único y precio entre **USD 1 y USD 500**.

Los controles y atributos HTML5 representan las validaciones que permite una página estática. Reglas dependientes de la fecha actual, cruces entre registros o detección de citas duplicadas no pueden verificarse completamente sin lógica de aplicación; se documentan y representan mediante ejemplos coherentes.

## Tecnologías y estructura del repositorio

- **HTML5:** estructura semántica, navegación, formularios y validaciones nativas.
- **CSS/CSS3:** estilos externos, variables, Flexbox, Grid, diseño responsive y estados visuales.
- **Git y GitHub:** colaboración con Issues, ramas y Pull Requests.
- **GitHub Pages:** publicación del sitio estático.

**Estructura sugerida por el enunciado** (las carpetas deberán existir en el repositorio conforme avance la implementación):

```text
VetCare/
├── index.html                  # Inicio de sesión 
```

## Ejecución local

1. Clonar el repositorio desde su URL de GitHub.
2. Abrir `index.html` en **Google Chrome** o **Mozilla Firefox**.
3. Navegar por los menús y formularios de ejemplo según el rol representado.

No se necesita instalar dependencias ni levantar un servidor para consultar las pantallas estáticas. El resultado de un formulario conduce a otra página del mapa navegacional **si los campos cumplen las validaciones HTML5**, pero no guarda datos reales.



## Publicación y fecha de entrega

- **Fecha límite:** miércoles **18 de noviembre de 2026, 23:59**.
- **Repositorio GitHub:** pendiente de incorporar la URL oficial del equipo.
- **Sitio GitHub Pages:** pendiente de publicar e incorporar la URL.
- **Entrega académica:** compartir ambas URLs en el aula virtual, con el PDF de documentación alojado en `docs/`.

## Colaboración

Las normas de trabajo, dependencias, calendario propuesto, estrategia de ramas y revisión están disponibles en [CONTRIBUTING.md](./CONTRIBUTING.md). Para integrar cambios debe utilizarse [PULL_REQUEST_TEMPLATE.md](./PULL_REQUEST_TEMPLATE.md).
