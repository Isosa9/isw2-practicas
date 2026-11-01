
# NOTAS - PRINCIPIOS SOLID APLICADOS

## Principio de Single Responsibility (S)

**Referencia: Principio 1 de SOLID**

1. La clase Pedido original tenía demasiadas responsabilidades dentro de un solo método.
2. Se separó la validación del inventario en la clase InventarioService.
3. Se creó CalculadoraPedido para realizar los cálculos del subtotal, ISV y total.
4. Se separó la generación e impresión del ticket en clases independientes.
5. Esta separación facilita el mantenimiento y permite modificar una responsabilidad sin afectar las demás.

## Principio  de Dependecy Inersion (D)

**Referencia: Principio 5 de SOLID**

1. La clase Pedido ya no depende directamente de una implementación de base de datos.
2. Se utiliza RepositorioPedido como dependencia para guardar la información.
3. El servicio NotificadorWhatsApp se recibe mediante inyección de dependencias.
4. Esto permite cambiar los servicios externos sin modificar la lógica principal del pedido.
5. La inyección de dependencias facilita las pruebas, la reutilización y el mantenimiento del sistema.

## CONCLUSIÓN

La aplicación de los principios Sy D permitió mejorar
la estructura de la clase Pedido, reducir el acoplamiento
y facilitar el mantenimiento del código.
