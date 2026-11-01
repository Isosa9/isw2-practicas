

## Aplicación de principios SOLID

Se realizó una separación de responsabilidades para mejorar
la organización, mantenimiento y reutilización del código.

### 1. Servicio de inventario

Se encarga exclusivamente de validar el stock y actualizar
las existencias de los productos.

```javascript
class InventarioService {

    validarStock(productos) {
        for (let producto of productos) {
            if (producto.stock < producto.cantidad) {
                throw new Error(
                    "Stock insuficiente: " + producto.nombre
                );
            }
        }
    }

    actualizarStock(productos) {
        for (let producto of productos) {
            producto.stock -= producto.cantidad;
        }
    }
}
```

### 2. Calculadora de pedidos

Se encarga exclusivamente de calcular el subtotal,
el ISV del 15 % y el total del pedido.

```javascript
class CalculadoraPedido {

    calcular(productos) {
        let subtotal = 0;

        for (let producto of productos) {
            subtotal += producto.precio * producto.cantidad;
        }

        let isv = subtotal * 0.15;
        let total = subtotal + isv;

        return {
            subtotal: subtotal,
            isv: isv,
            total: total
        };
    }
}
```

### 3. Generador de tickets

Se encarga exclusivamente de construir el contenido
del comprobante de compra.

```javascript
class GeneradorTicket {

    generar(pedido) {
        let ticket = "===== TICKET DE COMPRA =====\n";

        ticket += "Cliente: " + pedido.cliente + "\n";

        for (let producto of pedido.productos) {
            ticket += producto.nombre + " x "
                   + producto.cantidad + "\n";
        }

        ticket += "Subtotal: " + pedido.subtotal + "\n";
        ticket += "ISV: " + pedido.isv + "\n";
        ticket += "Total: " + pedido.total + "\n";

        return ticket;
    }
}
```

### 4. Impresora de tickets

Se encarga exclusivamente de imprimir el comprobante.

```javascript
class ImpresoraTicket {

    imprimir(ticket) {
        console.log(ticket);
    }
}
```

### 5. Clase Pedido (coordinadora)

Esta clase coordina el procesamiento del pedido.
No realiza directamente las operaciones de inventario,
cálculos, impresión, almacenamiento o envío.

Sus dependencias se reciben mediante el constructor.

```javascript
class Pedido {

    constructor(inventario, calculadora, generador,
                impresora, repositorio, notificador) {

        this.inventario = inventario;
        this.calculadora = calculadora;
        this.generador = generador;
        this.impresora = impresora;
        this.repositorio = repositorio;
        this.notificador = notificador;
    }

    procesarPedido(cliente, productos) {

        if (productos.length === 0) {
            throw new Error("El pedido está vacío");
        }

        this.inventario.validarStock(productos);

        let calculos = this.calculadora.calcular(productos);

        let pedido = {
            cliente: cliente.nombre,
            telefono: cliente.telefono,
            productos: productos,
            subtotal: calculos.subtotal,
            isv: calculos.isv,
            total: calculos.total
        };

        this.repositorio.guardar(pedido);

        this.inventario.actualizarStock(productos);

        let ticket = this.generador.generar(pedido);

        this.impresora.imprimir(ticket);

        this.notificador.enviar(
            cliente.telefono,
            "Hola " + cliente.nombre +
            ", tu pedido fue procesado. Total: " + pedido.total
        );

        return pedido;
    }
}
```

### 6. Dependencias externas

El almacenamiento y el envío de WhatsApp se manejan
mediante servicios independientes que se inyectan
en la clase Pedido.

```javascript
class RepositorioPedido {

    guardar(pedido) {
        // Guarda el pedido en la base de datos.
    }
}

class NotificadorWhatsApp {

    enviar(telefono, mensaje) {
        // Envía el mensaje mediante WhatsApp.
    }
}
```

### Resultado del refactor

Ahora cada clase tiene una responsabilidad específica.
La clase Pedido solamente coordina el proceso y recibe
sus dependencias desde el exterior.

Se aplicaron los principios SRP y DIP para conseguir
un código más organizado, flexible y fácil de mantener.
