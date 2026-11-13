
# Práctica 5: Clínica de código completa

## 1. Introducción

En esta práctica se realizó un proceso de refactorización sobre un módulo de cálculo de ventas de una pulpería.

El código original presentaba diferentes problemas de diseño y legibilidad que dificultaban su mantenimiento. Se aplicaron técnicas de código limpio y principios SOLID para mejorar su estructura, manteniendo el comportamiento original del sistema.

## 2. Diagnóstico de problemas encontrados

| N.º | Problema encontrado | Principio o práctica afectada | Solución aplicada |
|---|---|---|---|
| 1 | Variables con nombres poco descriptivos | Legibilidad | Se cambiaron los nombres por otros más claros. |
| 2 | Números mágicos en los cálculos | Código limpio | Se extrajeron constantes para descuentos, impuestos y envío. |
| 3 | Una función realizaba demasiadas tareas | SRP | Se separó el cálculo de descuentos y envío en funciones independientes. |
| 4 | Condicionales anidados | Código limpio | Se simplificaron las condiciones utilizando retornos tempranos. |
| 5 | Cálculos y reglas de negocio mezclados | Separación de responsabilidades | Se organizaron los cálculos en funciones específicas. |
| 6 | Parámetros poco claros | Legibilidad | Se utilizaron nombres descriptivos para identificar cada dato. |

## 3. Refactorizaciones aplicadas

### Renombramiento de variables
Se reemplazaron nombres cortos como p, c, t y d por nombres descriptivos como precio, cantidad, tipoCliente y descuento.

### Extracción de constantes
Se crearon constantes para representar los porcentajes de descuento, la tasa de ISV, el límite de envío gratis y el costo de envío.

### Simplificación de condiciones
Se mejoraron las validaciones para evitar estructuras condicionales innecesariamente complejas.

### Separación de responsabilidades
Se extrajeron las funciones calcularDescuento() y calcularEnvio(), permitiendo que cada función tenga una tarea específica.

### Mejora de legibilidad
Se organizó el código para facilitar su lectura, comprensión y mantenimiento.

## 4. Pruebas realizadas

Se crearon pruebas para comprobar el comportamiento original del módulo y verificar que los resultados se mantuvieran después de la refactorización.

Los casos probados fueron:

1. Venta normal sin descuentos.
2. Venta para cliente mayorista.
3. Venta para cliente frecuente.
4. Venta con cupón y membresía.
5. Venta con costo de envío.
6. Venta con datos inválidos.

**Resultado:** Las seis pruebas pasaron correctamente antes y después de la refactorización.

## 5. Historial de commits

Se realizaron seis commits para registrar los cambios de manera progresiva:

1. Agregar pruebas del comportamiento actual de ventas.
2. Mejorar nombres de variables.
3. Extraer constantes de descuentos e impuestos.
4. Simplificar condiciones del envío.
5. Separar cálculo de descuentos.
6. Separar cálculo del envío.

## 6. Conclusión

La práctica permitió identificar problemas comunes en el desarrollo de software y comprender la importancia de escribir código limpio y organizado.

Mediante la refactorización se mejoró la legibilidad, se separaron responsabilidades y se facilitaron futuras modificaciones.

Además, el uso de pruebas permitió comprobar que los cambios realizados conservaran el comportamiento esperado del sistema.
