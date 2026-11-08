# VetCareLa clínica necesita un sistema web transaccional que permita registrar, consultar, 
modificar y eliminar (operaciones CRUD) la información de propietarios, mascotas, citas, 
veterinarios y servicios, garantizando que los datos ingresados sean válidos desde el 
mismo formulario. La transacción central del negocio es agendar una cita: un 
propietario solicita atención para su mascota, la recepcionista elige el servicio, el 
veterinario, la fecha y la hora, y la cita queda en estado Programada hasta que se atiende 
o se cancela. 

Enlace al scalidraw (Máquina de estado finito):
https://excalidraw.com/#json=YbF_A7ISNs3vLGCvKSCF3,lDGJdwUF3RhgjqsRTLj-7g

Enlace al asistente: https://claude.ai/share/c88d3908-f7ce-4aad-af42-2f903bdbbf1a 

Se pueden agregar los CU:
- CU-11 Recuperar contraseña
- CU-16 Registrar cobro de atención, presencial y con comprobante; los pagos en línea siguen fuera del alcance.
- CU-18 Emitir receta médica