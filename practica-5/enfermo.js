

function calcularVenta(precio, cantidad, tipoCliente, cupon, membresia, requiereEnvio) {
    if (precio <= 0 || cantidad <= 0) {
        return { error: "Datos inválidos" };
    }

    let subtotal = precio * cantidad;
    let descuento = 0;

    if (tipoCliente === "mayorista") {
        descuento = subtotal * 0.10;
    } else if (tipoCliente === "frecuente") {
        descuento = subtotal * 0.05;
    }

    if (cupon === true) {
        descuento = descuento + subtotal * 0.05;
    }

    if (membresia === true) {
        descuento = descuento + subtotal * 0.02;
    }

    let baseImponible = subtotal - descuento;
    let impuesto = baseImponible * 0.15;
    let costoEnvio = 0;

    if (requiereEnvio === true) {
        if (baseImponible < 500) {
            costoEnvio = 50;
        } else {
            costoEnvio = 0;
        }
    }

    let total = baseImponible + impuesto + costoEnvio;

    if (total < 0) {
        return { error: "Total inválido" };
    }

    return {
        subtotal: subtotal,
        descuento: descuento,
        impuesto: impuesto,
        envio: costoEnvio,
        total: total
    };
}

module.exports = { calcularVenta };
