# Propuesta de mapa navegacional por niveles — VetCare

## 1. Idea en una frase

Representar **exactamente la misma navegación** que `mapa_navegacional.puml`, pero repartida en
**tres diagramas pequeños** en lugar de uno grande, y dibujar **una sola vez** lo que se repite.

| Archivo | Qué es |
|---|---|
| `mapa_navegacional.puml` | Mapa actual, un solo diagrama. No se modificó. |
| `LP_MP.puml` | Otra alternativa de diseño (home + barra de navegación). Cambia la interfaz. |
| `Claude_Sugerencia.puml` | **Esta propuesta.** No cambia la interfaz: solo cambia la forma de dibujarla. |

`Claude_Sugerencia.puml` contiene tres bloques `@startuml`; PlantUML genera una imagen por cada uno:

| Nivel | Imagen | Qué muestra | Flechas |
|---|---|---|---|
| 1 | `Claude_Sugerencia_1_general` | Login, roles, menús y módulos (como cajas cerradas) | 28 |
| 2 | `Claude_Sugerencia_2_crud` | El patrón CRUD común, dibujado una vez | 13 |
| 3 | `Claude_Sugerencia_3_especiales` | Los módulos con flujo propio: M4 Citas, M5 Atención clínica, Auditoría | 26 |

El diagrama más grande tiene 28 flechas, frente a las 138 del mapa actual.

## 2. Por qué el mapa actual se ve recargado

De las 138 flechas de `mapa_navegacional.puml`:

- **59** son el mismo patrón CRUD (listado, nuevo, detalle, editar, eliminar) repetido en
  5 módulos: M2, M3, M6-Veterinarios, M6-Recepcionistas y M7.
- **40** son «Volver al menú» y «Cerrar sesión» dibujadas desde cada pantalla de M2, M6 y M7
  (2 flechas × 5 pantallas × 4 submódulos).

Es decir, casi tres cuartas partes del diagrama son repeticiones. No hay un problema de
contenido, sino de forma de dibujarlo.

## 3. Las tres técnicas de la propuesta

### 3.1 Módulos como submáquinas (Nivel 1)

En UML, un estado puede **contener** otra máquina de estados (*estado compuesto* o
*submáquina*). En el Nivel 1 cada módulo aparece como **una caja cerrada** (marcada con ⊕)
que lista los nombres de sus pantallas y remite al nivel donde está su detalle.

Así el Nivel 1 responde rápido a «¿qué puede hacer cada rol y cómo llega ahí?», sin el ruido
de las pantallas internas.

### 3.2 Transiciones de grupo (Nivel 1)

En UML, **una flecha que sale de un estado compuesto aplica a todos los estados que contiene**.
Por eso:

- `M6 · Veterinarios → menu_administrador : Volver al menú` (una flecha) significa lo mismo
  que las 5 flechas del mapa actual, una desde cada pantalla de veterinarios.
- Lo mismo para «Cerrar sesión» y para M2, M6-Recepcionistas y M7.

Cuando una acción sale de **una sola** pantalla del módulo, se indica entre paréntesis.
Ejemplo: `M3 → M4 : Atajo «Agendar cita» (desde mascota-detalle; abre cita-nuevo)`.

Resultado: 40 flechas pasan a ser 8.

### 3.3 Patrón dibujado una vez (Nivel 2)

M2, M3, M6-Veterinarios, M6-Recepcionistas y M7 tienen las mismas cinco pantallas y las mismas
acciones. El Nivel 2 dibuja ese patrón **una vez** con el nombre genérico `entidad-…html`, y una
tabla indica a qué módulos se aplica y con qué valor de «entidad».

La única diferencia entre esos módulos es que **Mascotas no tiene «Editar» desde el detalle**.
Esa flecha va marcada con (†) y la tabla dice en qué módulos existe. Así no se pierde ninguna
diferencia del mapa original.

Resultado: 59 flechas pasan a ser 12.

Los módulos que **no** siguen el patrón (M4, con Agendar/Reprogramar/Cancelar cita; M5, con su
flujo de atención; y Auditoría) se dibujan completos en el Nivel 3. En ese nivel, las pantallas
de otros niveles (menús y `mascota-detalle.html`) aparecen en gris solo para mostrar por dónde
se entra y se sale.

## 4. Por qué es correcto: representa lo mismo

Se comprobó que **las 138 flechas del mapa actual están representadas**:

| Grupo del mapa actual | Flechas en el mapa | Dónde está en la propuesta |
|---|---|---|
| Inicio y login | 5 | Nivel 1 |
| Enlaces de menús, atajos y cierre de sesión de los menús | 12 | Nivel 1 |
| CRUD de M2, M3, M6-V, M6-R, M7 | 59 | Nivel 2 (patrón + tabla) |
| «Volver al menú» / «Cerrar sesión» de M2, M6-V, M6-R, M7 | 40 | Nivel 1 (8 transiciones de grupo) |
| M4 · Citas | 11 | Nivel 3 |
| M5 · Atención clínica | 10 | Nivel 3 |
| Auditoría (Ver detalle) | 1 | Nivel 3 |
| **Total** | **138** | |

Además:

- Están **las mismas 41 pantallas** con los mismos nombres de archivo.
- Se conservan las **mismas etiquetas** de las flechas y las **mismas guardas**
  (`[datos válidos]`, `[motivo ingresado]`, `[credenciales inválidas]`, `[rol: …]`).
- Se conservan los **mismos destinos de «Cerrar sesión»** que el mapa actual: los menús y M2 van
  al estado final (◉) y M6/M7 van a `index.html`.
- No se agregó ni se quitó ninguna relación: la propuesta solo cambia la forma de dibujar.

## 5. Ventajas para el equipo

1. **Cada diagrama cabe en una pantalla o una diapositiva** y se puede explicar por separado.
2. **Cambiar el patrón CRUD se hace en un solo lugar.** Hoy, cambiar una etiqueta como «Volver»
   obliga a editar 5 módulos.
3. **Un módulo nuevo con CRUD cuesta una fila en la tabla del Nivel 2** y una caja en el
   Nivel 1, en vez de 12 flechas nuevas.
4. **Se ven las inconsistencias.** Al dibujar el patrón una sola vez, cualquier diferencia entre
   módulos queda a la vista (por ejemplo, el (†) de Mascotas).

## 6. Inconsistencias del mapa actual que esta forma de dibujarlo deja a la vista

No se corrigieron, porque la propuesta debe representar lo mismo que el mapa actual. Conviene
que el equipo las decida:

1. **«Cerrar sesión» tiene dos destinos:** M2 y los menús van al ◉; M6 y M7 van a `index.html`.
2. **«Volver al menú» y «Cerrar sesión» desde los módulos** solo están en M2, M6 y M7. M3, M4 y
   M5 no los tienen dibujados, aunque la leyenda del mapa dice que el enlace está en todas las
   pantallas.
3. **Mascotas no tiene «Editar» desde el detalle**, a diferencia de los otros CRUD.
4. **Auditoría no tiene «Volver»** desde `auditoria_detalle.html`, ni «Volver al menú» o
   «Cerrar sesión».
5. **Nombres de auditoría:** `auditoria_listar.html` y `auditoria_detalle.html` no siguen el
   formato `entidad-acción` (`servicio-listado.html`).
