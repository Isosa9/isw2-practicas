
## Clase Pedido

La siguiente clase realiza todas las operaciones del pedido en un solo método, sin separar responsabilidades.

```javascript
class Pedido {

    procesarPedido(cliente, productos) {

        console.log("Iniciando pedido...");

        // 1. Validar que existan productos
        if (productos.length === 0) {
            console.log("No hay productos en el pedido");
            return;
        }

        // 2. Consultar y validar el stock
        let subtotal = 0;

        for (let producto of productos) {

            if (producto.stock < producto.cantidad) {
                console.log("Stock insuficiente: " + producto.nombre);
                return;
            }

            // 3. Calcular el precio de cada producto
            subtotal += producto.precio * producto.cantidad;
        }

        // 4. Calcular el ISV del 15 %
        let isv = subtotal * 0.15;

        // 5. Calcular el total del pedido
        let total = subtotal + isv;

        // 6. Actualizar el inventario
        for (let producto of productos) {
            producto.stock -= producto.cantidad;
        }

        // 7. Preparar los datos del pedido
        let pedido = {
            cliente: cliente.nombre,
            telefono: cliente.telefono,
            productos: productos,
            subtotal: subtotal,
            isv: isv,
            total: total
        };

        // 8. Conectarse directamente a la base de datos
        let conexion = conectarBaseDatos();

        // 9. Guardar el pedido en la base de datos
        conexion.insertar("pedidos", pedido);

        // 10. Confirmar que el pedido fue guardado
        console.log("Pedido guardado correctamente");

        // 11. Generar el contenido del ticket
        let ticket = "===== TICKET DE COMPRA =====\n";
        ticket += "Cliente: " + cliente.nombre + "\n";

        for (let producto of productos) {
            ticket += producto.nombre + " x " + producto.cantidad + "\n";
        }

        ticket += "Subtotal: " + subtotal + "\n";
        ticket += "ISV: " + isv + "\n";
        ticket += "Total: " + total + "\n";

        // 12. Imprimir el ticket
        imprimirTicket(ticket);

        // 13. Preparar el mensaje de WhatsApp
        let mensaje = "Hola " + cliente.nombre +
                      ", tu pedido fue procesado. Total: " + total;

        // 14. Enviar el mensaje al cliente
        enviarWhatsApp(cliente.telefono, mensaje);

        // 15. Finalizar el proceso
        console.log("Pedido procesado exitosamente");

        return pedido;
    }
}
```
