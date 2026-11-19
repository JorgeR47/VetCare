# VetCare — Clínica Veterinaria “Huellitas”

> **Sistema web de gestión de citas y pacientes para la clínica veterinaria “Huellitas”.**  
> Prototipo web estático navegable desarrollado con **HTML5 semántico** y **CSS3 puro**.

---

## 📋 Información Académica

* **Institución:** Escuela Politécnica Nacional (EPN)
* **Facultad:** Facultad de Ingeniería de Sistemas
* **Materia:** Aplicaciones Web (GR2SW)
* **Docente:** Ing. Carlos Iñiguez
* **Fecha de Entrega:** 18 de noviembre de 2026

### 👥 Integrantes del Equipo

| Integrante | Rol / Responsabilidad Principal | Casos de Uso |
| :--- | :--- | :--- |
| **Luis Diaz** | Acceso, navegación base y módulo de propietarios | CU-01, CU-05, CU-09, CU-13 |
| **Jorge Revelo** | Citas, disponibilidad de turnos y catálogo de servicios | CU-02, CU-06, CU-10, CU-14 |
| **Mayerly Chavez** | Mascotas, historia clínica y atención veterinaria | CU-03, CU-07, CU-11 |
| **Anderson Pilataxi** | Administración, bitácora de auditoría y cuentas de usuario | CU-04, CU-08, CU-12 |

---

## 🎯 Problema y Objetivo

### Situación actual
La clínica veterinaria **Huellitas**, ubicada en **Quito**, atiende un promedio de **40 mascotas diarias** con **tres veterinarios y una recepcionista**. La gestión manual en cuadernos y expedientes físicos provoca citas duplicadas, errores de contacto, desorganización en agendas y dificultades para consultar el historial clínico.

### Objetivo del sistema
Diseñar y presentar una **interfaz web navegable** que modele de forma centralizada los procesos de atención veterinaria de la clínica, validando las entradas mediante formularios **HTML5 nativos** y estilos con **CSS3 puro** (Mobile-First, Flexbox y Grid).

> **Alcance académico:** Esta versión no requiere backend, base de datos ni JavaScript. Todas las operaciones CRUD, autenticación y transiciones se representan mediante páginas enlazadas y ventanas modales incrustadas con datos de ejemplo coherentes.

---

## 🔐 Control de Acceso y Simulación de Roles (CU-01)

El prototipo simula el acceso al sistema desde `index.html`:
* Valida campos obligatorios de correo (`type="email"`) y contraseña (`type="password"`).
* Permite el ingreso inmediato a través de **chips de acceso directo** según el perfil del personal:
  * 🟢 **Recepcionista:** `pages/recepcionista/propietario/propietario_listado.html` o `pages/recepcionista/recepcionista_inicio.html`.
  * 🟣 **Veterinario:** `pages/veterinario/veterinario-agenda-lista.html`.
  * 🟠 **Administrador:** `pages/administrador/servicio/servicio_listar.html`.
* Todas las pantallas cuentan con enlace superior directo para **Cerrar sesión** y volver a `index.html`.

---

## 📦 Cobertura de Casos de Uso (100% Implementado)

El prototipo cubre la totalidad de los **14 Casos de Uso** definidos en el Documento de Visión v0.9:

| ID | Caso de Uso | Actor | Ubicación de Pantallas | Estado |
| :--- | :--- | :--- | :--- | :---: |
| **CU-01** | Iniciar sesión | Todos | `index.html`<br>`pages/recepcionista/servicios/index.html` | ✅ Conforme |
| **CU-02** | Gestionar propietarios | Recepcionista | `pages/recepcionista/propietario/` (5 pantallas/modales) | ✅ Conforme |
| **CU-03** | Gestionar mascotas | Recepcionista | `pages/recepcionista/mascota/` (5 pantallas) | ✅ Conforme |
| **CU-04** | Agendar cita | Recepcionista | `pages/recepcionista/cita/cita_nueva.html` | ✅ Conforme |
| **CU-05** | Gestionar citas | Recepcionista | `pages/recepcionista/cita/` (listado, reprogramar, cancelar, detalle) | ✅ Conforme |
| **CU-06** | Consultar agenda del día | Veterinario | `pages/veterinario/veterinario-agenda-lista.html`<br>`veterinario-detalle-cita.html` | ✅ Conforme |
| **CU-07** | Registrar atención médica | Veterinario | `pages/veterinario/veterinario-registrar-atencion.html`<br>`veterinario-atencion-confirmar.html` | ✅ Conforme |
| **CU-08** | Consultar historia clínica | Veterinario | `pages/veterinario/veterinario-historial-clinico.html`<br>`veterinario-historia-clinica-detalle.html`<br>`veterinario-atencion-detalle.html` | ✅ Conforme |
| **CU-09** | Gestionar veterinarios | Administrador | `pages/administrador/veterinario/` (5 pantallas/modales) | ✅ Conforme |
| **CU-10** | Gestionar servicios | Administrador | `pages/administrador/servicio/` (5 pantallas/modales) | ✅ Conforme |
| **CU-11** | Gestionar recepcionistas | Administrador | `pages/administrador/recepcionista/` (5 pantallas/modales) | ✅ Conforme |
| **CU-12** | Consultar bitácora de auditoría | Administrador | `pages/administrador/auditoria/` (listado con filtros y detalle) | ✅ Conforme |
| **CU-13** | Consultar catálogo de servicios | Recepcionista | `pages/recepcionista/servicios/servicio_listado.html`<br>`pages/recepcionista/servicios/servicios.html` | ✅ Conforme |
| **CU-14** | Consultar disponibilidad de turnos | Recepcionista | `pages/recepcionista/cita/cita_listado.html#disponibilidad` | ✅ Conforme |

---

## 📂 Estructura del Repositorio

```text
VetCare/
├── index.html                               # Página de inicio de sesión principal
├── README.md                                # Documentación general del proyecto
├── css/
│   ├── estilos.css                          # Hoja de estilos global (variables, layout, botones)
│   ├── guia-estilos.html                    # Guía de componentes y tokens de diseño
│   └── paginas/
│       ├── administrador.css                # Estilos específicos de administración
│       ├── cita.css                         # Estilos de gestión de citas y turnos
│       ├── login.css                        # Estilos de la pantalla de acceso
│       ├── propietario.css                  # Estilos del módulo de propietarios
│       ├── recepcionista.css                # Estilos generales del área de recepción
│       └── veterinario.css                  # Estilos de atención clínica y agenda
├── docs/
│   ├── mapa_navegacion_detallado.mmd        # Mapa navegacional tipo tubería en Mermaid
│   └── casos_de_uso/
│       ├── diagrama_casos_de_uso.puml       # Diagrama oficial de Casos de Uso (PlantUML / UML 2.5)
│       └── diagrama_casos_de_uso.mmd        # Diagrama de Casos de Uso en Mermaid
└── pages/
    ├── administrador/                       # Área de Administración
    │   ├── auditoria/
    │   │   ├── auditoria_detalle.html
    │   │   └── auditoria_listar.html
    │   ├── recepcionista/
    │   │   ├── recepcionista_dar_baja.html
    │   │   ├── recepcionista_detalle.html
    │   │   ├── recepcionista_editar.html
    │   │   ├── recepcionista_listar.html
    │   │   └── recepcionista_registrar.html
    │   ├── servicio/
    │   │   ├── servicio_dar_baja.html
    │   │   ├── servicio_detalle.html
    │   │   ├── servicio_editar.html
    │   │   ├── servicio_listar.html
    │   │   └── servicio_registrar.html
    │   └── veterinario/
    │       ├── veterinario_dar_baja.html
    │       ├── veterinario_detalle.html
    │       ├── veterinario_editar.html
    │       ├── veterinario_listar.html
    │       └── veterinario_registrar.html
    ├── recepcionista/                       # Área de Recepción
    │   ├── recepcionista_inicio.html        # Menú principal de recepción
    │   ├── cita/
    │   │   ├── cita_cancelar.html
    │   │   ├── cita_detalle.html
    │   │   ├── cita_listado.html            # Listado de citas y turnos disponibles
    │   │   ├── cita_nueva.html              # Formulario de agendamiento
    │   │   └── cita_reprogramar.html
    │   ├── mascota/
    │   │   ├── mascota_dar_baja.html
    │   │   ├── mascota_detalle.html
    │   │   ├── mascota_editar.html
    │   │   ├── mascota_listado.html
    │   │   └── mascota_nuevo.html
    │   ├── propietario/
    │   │   ├── propietario_dar_baja.html
    │   │   ├── propietario_detalle.html
    │   │   ├── propietario_editar.html
    │   │   ├── propietario_listado.html
    │   │   └── propietario_registrar.html
    │   └── servicios/
    │       ├── index.html                   # Acceso alternativo
    │       ├── servicio_listado.html        # Catálogo en tabla con requisitos
    │       └── servicios.html               # Catálogo en tarjetas visuales
    └── veterinario/                         # Área Clínica
        ├── veterinario-agenda-lista.html    # Agenda de citas diarias
        ├── veterinario-atencion-confirmar.html
        ├── veterinario-atencion-detalle.html
        ├── veterinario-detalle-cita.html
        ├── veterinario-historia-clinica-detalle.html
        ├── veterinario-historial-clinico.html
        └── veterinario-registrar-atencion.html
```

---

## 📊 Diagramas del Sistema (UML 2.5 y Mermaid)

Los diagramas oficiales se encuentran disponibles en la carpeta `docs/`:

1. **Diagrama de Casos de Uso Oficial (UML 2.5 en PlantUML):** [`docs/casos_de_uso/diagrama_casos_de_uso.puml`](./docs/casos_de_uso/diagrama_casos_de_uso.puml)
   * Especificación formal bajo el estándar **UML 2.5** con paquetes por módulo, actores primarios, secundario (Sistema) e interesado (Propietario).
   * Incorpora relaciones de herencia de credenciales (`<|--`), inclusiones (`<<include>>` para turnos en agendamiento) y extensiones (`<<extend>>` para atención médica, agendamiento desde listado y creación de historia clínica).
2. **Diagrama de Casos de Uso (Formato Mermaid):** [`docs/casos_de_uso/diagrama_casos_de_uso.mmd`](./docs/casos_de_uso/diagrama_casos_de_uso.mmd)
   * Versión visual interactiva renderizable directamente en GitHub o Mermaid Live.
3. **Mapa Navegacional Tipo Tubería:** [`docs/mapa_navegacion_detallado.mmd`](./docs/mapa_navegacion_detallado.mmd)
   * Detalla todas las transiciones, enlaces de barra superior, formularios con método GET, botones modales (`:target` con `iframe`) y acciones de retorno y cierre de sesión.
   * Utiliza una paleta de colores por rol: Azul (Login), Verde (Recepción), Morado (Veterinaria), Naranja (Administración) y Rojo (Bajas/Cancelaciones/Cierre de sesión).

---

## ⚙️ Reglas de Negocio y Validaciones HTML5

* **Propietarios:** Cédula ecuatoriana de 10 dígitos numéricos (`pattern="[0-9]{10}"`), celular de 10 dígitos que inicia con `09` (`pattern="09[0-9]{8}"`), nombres y apellidos solo con letras y espacios (`minlength="2" maxlength="50"`).
* **Mascotas:** Especie tipificada (`Perro`, `Gato`, `Ave`, `Roedor` u `Otro` con especificación obligatoria), peso decimal entre 0.1 y 120 kg (`step="0.1"`), fecha de nacimiento no futura, y N.º de Historia Clínica de solo lectura (`readonly`).
* **Citas y Turnos:** Horarios de atención de lunes a sábado de 08:00 a 18:00 en bloques de 30 minutos (`step="1800"`, último turno a las 17:30). Rango de fechas seleccionable de hasta 6 meses a futuro. Estado inicial fijado en `Programada`.
* **Políticas de Cancelación / Reprogramación / Bajas:** Toda baja lógica, cancelación o reprogramación requiere de un motivo justificado obligatorio de entre 10 y 200 caracteres (`minlength="10" maxlength="200"`). Solo se cancelan o reprograman citas en estado `Programada` con al menos 24 horas de anticipación.
* **Servicios:** Tarifas en dólares estadounidenses (USD) mayores a cero y hasta USD 1000 con dos decimales (`step="0.01"`).

---

## 🚀 Ejecución y Visualización Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JorgeR47/VetCare.git
   ```
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (**Google Chrome** o **Mozilla Firefox**).
3. Para previsualizar o exportar los diagramas `.mmd`, abrir los archivos en un editor con soporte para Mermaid (como VS Code con la extensión *Markdown Preview Mermaid Support*) o copiar su contenido en [Mermaid Live Editor](https://mermaid.live/).
