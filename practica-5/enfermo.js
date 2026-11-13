
const DESCUENTO_MAYORISTA = 0.10;
const DESCUENTO_FRECUENTE = 0.05;
const DESCUENTO_CUPON = 0.05;
const DESCUENTO_MEMBRESIA = 0.02;
const TASA_ISV = 0.15;
const LIMITE_ENVIO_GRATIS = 500;
const COSTO_ENVIO = 50;

function calcularDescuento(subtotal, tipoCliente, cupon, membresia) {
    let descuento = 0;

    if (tipoCliente === "mayorista") {
        descuento += subtotal * DESCUENTO_MAYORISTA;
    } else if (tipoCliente === "frecuente") {
        descuento += subtotal * DESCUENTO_FRECUENTE;
    }

    if (cupon) {
        descuento += subtotal * DESCUENTO_CUPON;
    }

    if (membresia) {
        descuento += subtotal * DESCUENTO_MEMBRESIA;
    }

    return descuento;
}

function calcularEnvio(baseImponible, requiereEnvio) {
    if (!requiereEnvio) return 0;

    if (baseImponible >= LIMITE_ENVIO_GRATIS) {
        return 0;
    }

    return COSTO_ENVIO;
}

function calcularVenta(precio, cantidad, tipoCliente, cupon, membresia, requiereEnvio) {
    if (precio <= 0 || cantidad <= 0) {
        return { error: "Datos inválidos" };
    }

    let subtotal = precio * cantidad;

const descuento = calcularDescuento(
    subtotal,
    tipoCliente,
    cupon,
    membresia
);

    let baseImponible = subtotal - descuento;
    let impuesto = baseImponible * TASA_ISV;
    


    const costoEnvio = calcularEnvio(
    baseImponible,
    requiereEnvio
);

    

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
