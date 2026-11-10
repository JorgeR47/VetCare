# Documento de Visión — VetCare

*Sistema web de gestión de citas y pacientes · Clínica veterinaria Huellitas, Quito · Desarrollo de Aplicaciones Web (primer bimestre)*

*Equipo: Luis, Jorge, Mayerly y Anderson*

## 1. Planteamiento del problema

**Situación actual.** La clínica veterinaria Huellitas, ubicada en Quito, atiende aproximadamente 40 mascotas al día con tres veterinarios y una recepcionista. Hoy las citas se toman por teléfono y se anotan en un cuaderno; los datos de los propietarios se registran a mano; la recepcionista elige el servicio, el veterinario, la fecha y la hora; y el historial de cada mascota está repartido en fichas de papel. La cita queda en estado Programada hasta que se atiende o se cancela.

**Problemas que provoca este manejo manual:**

- Citas duplicadas en el mismo horario.
- Números de contacto incompletos o mal escritos.
- Mascotas registradas dos veces.
- Veterinarios que atienden sin conocer las atenciones anteriores del paciente.

**A quién afecta y cuál es el impacto.** Afecta a la recepcionista, que concentra el registro de propietarios, mascotas y citas; a los veterinarios, que no disponen de los antecedentes clínicos al atender; y, de forma indirecta, a los propietarios y sus mascotas, cuya atención depende de esos registros. El impacto es la duplicación de información, los datos incompletos y la dificultad para consultar antecedentes clínicos.

## 2. Interesados y usuarios

| Interesado | Qué necesita | Responsabilidad en el sistema |
| --- | --- | --- |
| **Recepcionista** (1) | Registrar propietarios y mascotas (creando la historia clínica); agendar, reprogramar y cancelar citas. | Mantener actualizados propietarios, mascotas y citas (CU-02 a CU-05). |
| **Veterinario** (3) | Consultar su agenda del día, registrar la atención médica (diagnóstico) y revisar el historial clínico de la mascota. | Registrar atenciones y consultar historiales (CU-06 a CU-08). |
| **Administrador** | Gestionar el personal veterinario y el catálogo de servicios con sus precios. | Mantener veterinarios y servicios (CU-09, CU-10) y, según el documento de necesidades, recepcionistas (CU-11). |
| **Propietario** | Solicitar atención para su mascota. | Interesado externo: no es usuario del sistema; la recepcionista registra sus datos y los de su mascota. |
| **Equipo de desarrollo** | Diseñar y entregar el prototipo dentro del plazo. | Luis: M1 y M2 · Jorge: M3 y M4 · Mayerly: M5 · Anderson: M6 y M7. |

## 3. Objetivo del sistema

VetCare diseñará y presentará una interfaz web navegable que modele el registro de propietarios y mascotas, el agendamiento de citas, la atención clínica y la administración de personal y servicios de la clínica Huellitas, validando los datos de entrada con formularios HTML5. Con ello busca mostrar cómo evitar las citas duplicadas, los datos incompletos y la falta de acceso al historial clínico.

## 4. Alcance

**Incluye esta versión:**

- Siete módulos (M1 a M7) y los casos de uso CU-01 a CU-10. El CU-11 (gestionar recepcionistas), que figura en el documento de necesidades pero cuya especificación está pendiente, se considera alcance adicional sujeto a aprobación.
- Al menos 18 pantallas HTML estáticas con datos de ejemplo, navegables por rol y sin enlaces rotos.
- Formularios con validación HTML5 conforme a las reglas de negocio.
- Operaciones CRUD representadas con pantallas: crear (formulario vacío), consultar (listado con buscador), actualizar (formulario precargado) y eliminar (pantalla de confirmación).
- Publicación del sitio en GitHub Pages y documentación consolidada en un solo PDF.

**Queda fuera:**

- Pagos en línea, facturación y cartera de pago.
- Notificaciones por correo.
- Base de datos y persistencia real de datos.
- Backend, JavaScript y frameworks de CSS.
- Autenticación real: el inicio de sesión es una simulación.
- Verificación real de citas duplicadas y de reglas que dependen de la fecha actual o del cruce entre registros; se documentan y se representan con ejemplos coherentes.

## 5. Características principales

1. **Acceso simulado y menú por rol:** inicio de sesión con correo y contraseña que conduce al menú del recepcionista, veterinario o administrador (CU-01).
2. **Gestión de propietarios:** registrar, buscar, editar y eliminar, con cédula, celular y correo validados (CU-02).
3. **Gestión de mascotas:** registrar, buscar, editar y eliminar mascotas asociadas a un propietario, creando su historia clínica (CU-03).
4. **Agendamiento de citas:** vincular propietario, mascota, servicio, veterinario, fecha y hora (CU-04).
5. **Gestión de citas:** consultar, reprogramar y cancelar con motivo, con estados Programada, Atendida y Cancelada (CU-05).
6. **Agenda del día del veterinario:** ver las citas programadas para una fecha (CU-06).
7. **Registro de atención médica:** diagnóstico, tratamiento y peso; la cita pasa a Atendida (CU-07).
8. **Consulta del historial clínico:** ver las atenciones anteriores de una mascota (CU-08).
9. **Gestión de veterinarios:** registrar, consultar, editar y eliminar (CU-09).
10. **Catálogo de servicios y precios:** registrar, consultar, editar y eliminar servicios (CU-10).

## 6. Restricciones y supuestos

**Tecnológicas.**

- Solo HTML5 y CSS/CSS3; sin JavaScript, backend, base de datos ni frameworks de CSS.
- Hojas de estilo externas en la carpeta css/, sin estilos en línea; variables CSS, Flexbox, Grid y al menos dos puntos de quiebre (@media).
- HTML semántico, formularios sin novalidate y contraste de color de nivel AA de WCAG.
- Control de versiones con Git y GitHub, y publicación en GitHub Pages.

**De navegadores.** El sitio debe funcionar en Google Chrome y Mozilla Firefox, y pasar los validadores de HTML y CSS del W3C.

**De negocio.**

- Propietario: cédula de 10 dígitos; celular de 10 dígitos que inicia con 09; correo válido; nombres y apellidos de 2 a 50 caracteres.
- Mascota: especie Perro, Gato, Ave, Roedor u Otro; peso de 0,1 a 120 kg con un decimal; fecha de nacimiento no futura.
- Citas: lunes a sábado, de 08:00 a 18:00, en intervalos de 30 minutos; sin fechas pasadas; cancelar exige un motivo de hasta 200 caracteres.
- Servicios: nombre único y precio entre USD 1 y USD 500.
- Plazo: miércoles 18 de noviembre de 2026, 23:59.

**Supuestos.**

- Los datos son ejemplos coherentes, no reales; los formularios no guardan información.
- Agendar una cita depende de que existan los módulos M2, M3, M6 y M7.
- La clínica opera con tres veterinarios, una recepcionista y unas 40 mascotas diarias.

## 7. Glosario

| Término | Definición |
| --- | --- |
| Cita | Reserva de un horario para atender a una mascota, con propietario, servicio, veterinario, fecha y hora. |
| Estado de la cita | Programada (pendiente de atención), Atendida (atención registrada) o Cancelada (anulada con motivo). |
| Reprogramar | Cambiar la fecha u hora de una cita ya agendada. |
| Atención médica | Acto clínico realizado en una cita: diagnóstico, tratamiento y peso. |
| Historia clínica | Expediente de una mascota, creado al registrarla, que reemplaza las fichas de papel. |
| Historial clínico | Atenciones anteriores de una mascota que el veterinario consulta antes de atender. |
| Agenda del día | Citas programadas de un veterinario para una fecha. |
| Servicio | Prestación que ofrece la clínica y que se elige al agendar una cita; tiene nombre único y precio. |
| Catálogo de servicios | Lista administrada de servicios con sus precios. |
| Propietario | Persona responsable de una mascota que solicita atención. |
| Mascota | Animal atendido, asociado a un propietario; especie Perro, Gato, Ave, Roedor u Otro. |
| Caso de uso (CU) | Interacción entre un actor y el sistema para lograr un objetivo (CU-01 a CU-11). |
| Módulo | Agrupación de casos de uso afines (M1 a M7) asignada a un integrante. |
| Mapa navegacional | Diagrama de pantallas y transiciones rotuladas, agrupadas por rol. |
| Prototipo navegable | Sitio estático con datos de ejemplo y enlaces funcionales, sin persistencia real. |
| Validación HTML5 | Control de datos de entrada con atributos nativos como required, pattern, min y max. |
