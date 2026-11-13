
const DESCUENTO_MAYORISTA = 0.10;
const DESCUENTO_FRECUENTE = 0.05;
const DESCUENTO_CUPON = 0.05;
const DESCUENTO_MEMBRESIA = 0.02;
const TASA_ISV = 0.15;
const LIMITE_ENVIO_GRATIS = 500;
const COSTO_ENVIO = 50;


function calcularVenta(precio, cantidad, tipoCliente, cupon, membresia, requiereEnvio) {
    if (precio <= 0 || cantidad <= 0) {
        return { error: "Datos inválidos" };
    }

    let subtotal = precio * cantidad;
    let descuento = 0;

    if (tipoCliente === "mayorista") {
        descuento = subtotal * DESCUENTO_MAYORISTA;
    } else if (tipoCliente === "frecuente") {
        descuento = subtotal * DESCUENTO_FRECUENTE;
    }

    if (cupon === true) {
        descuento = descuento + subtotal * DESCUENTO_CUPON;
    }

    if (membresia === true) {
        descuento = descuento + subtotal * DESCUENTO_MEMBRESIA;
    }

    let baseImponible = subtotal - descuento;
    let impuesto = baseImponible * TASA_ISV;
    let costoEnvio = 0;

    if (requiereEnvio === true) {
        if (baseImponible < LIMITE_ENVIO_GRATIS) {
            costoEnvio = COSTO_ENVIO;
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
