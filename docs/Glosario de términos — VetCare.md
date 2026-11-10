# Glosario de términos — VetCare

*Documento de Visión del Sistema · Clínica veterinaria Huellitas, Quito · Desarrollo de Aplicaciones Web*

Este glosario reúne 40 términos del dominio de VetCare, agrupados por tema, para que todo el equipo y los lectores del documento usen el mismo vocabulario.

## 1. Actores y roles

| N.º | Término | Definición |
| --- | --- | --- |
| 1 | Administrador | Usuario que gestiona el personal veterinario, los recepcionistas y el catálogo de servicios con sus precios (CU-09, CU-10, CU-11). |
| 2 | Recepcionista | Usuario que registra propietarios y mascotas, y agenda, reprograma y cancela citas (CU-02 a CU-05). La clínica cuenta con una. |
| 3 | Veterinario | Profesional que consulta su agenda del día, registra la atención médica y revisa el historial clínico de la mascota (CU-06 a CU-08). La clínica cuenta con tres. |
| 4 | Propietario | Persona responsable de una o más mascotas que solicita atención en la clínica. Se identifica con cédula de 10 dígitos y celular de 10 dígitos que inicia con 09. |
| 5 | Usuario | Persona con acceso al sistema mediante correo y contraseña; puede ser recepcionista, veterinario o administrador. |
| 6 | Rol | Perfil de acceso asignado a un usuario que determina qué menú y qué funcionalidades ve en el sistema. |

## 2. Pacientes y registro clínico

| N.º | Término | Definición |
| --- | --- | --- |
| 7 | Clínica Huellitas | Clínica veterinaria ubicada en Quito que atiende aproximadamente 40 mascotas al día; es el negocio que VetCare modela. |
| 8 | Mascota | Animal atendido en la clínica, siempre asociado a un propietario. Registra especie, peso (0,1 a 120 kg) y fecha de nacimiento no futura. |
| 9 | Especie | Clasificación del animal: Perro, Gato, Ave, Roedor u Otro. |
| 10 | Historia clínica | Expediente único de una mascota, creado al registrarla, que concentra su información clínica en un registro cronológico de las atenciones anteriores de una mascota
| 12 | Atención médica | Acto clínico realizado en una cita: se registran diagnóstico, tratamiento y peso, y la cita pasa a estado Atendida (CU-07). |
| 13 | Diagnóstico | Conclusión del veterinario sobre el estado de salud de la mascota, registrada en la atención médica. |
| 14 | Tratamiento | Indicaciones o procedimientos que el veterinario prescribe a partir del diagnóstico. |
| 15 | Peso | Medida de la mascota en kilogramos, con un decimal; se registra en su ficha y en cada atención. |

## 3. Citas y agenda

| N.º | Término | Definición |
| --- | --- | --- |
| 16 | Cita | Reserva de un horario para atender a una mascota; vincula propietario, mascota, servicio, veterinario, fecha y hora. |
| 20 | Estado de la cita | Situación de la cita: **Programada** (agendada y pendiente de atención), **Atendida** (atención registrada) o **Cancelada** (anulada con motivo). |
| 21 | Motivo de cancelación | Texto obligatorio, de hasta 200 caracteres, que explica por qué se canceló una cita. |
| 22 | Agenda del día | Lista de citas programadas de un veterinario para una fecha determinada (CU-06). |
| 23 | Horario de atención | Lunes a sábado, de 08:00 a 18:00; no se admiten citas en fechas pasadas. |
| 24 | Intervalo de atención | Bloque de 30 minutos en que se divide el horario de atención; cada cita ocupa uno. |
| 25 | Cita duplicada | Dos citas para el mismo veterinario en el mismo día y hora; es un problema del registro manual que el sistema busca evitar. |

## 4. Servicios y personal

| N.º | Término | Definición |
| --- | --- | --- |
| 26 | Servicio | Prestación que ofrece la clínica (por ejemplo, consulta general o vacunación) y que se elige al agendar una cita. Su nombre es único. |
| 27 | Catálogo de servicios | Lista administrada de los servicios de la clínica con sus precios (CU-10). |
| 28 | Precio | Valor en dólares (USD) de un servicio, entre USD 1 y USD 500. |
| 29 | Personal | Veterinarios y recepcionistas de la clínica, gestionados por el administrador (CU-09 y CU-11). |
