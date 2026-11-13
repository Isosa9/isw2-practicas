
function calcularVenta(p, c, t, cu, m, e) {
    if (p <= 0 || c <= 0) {
        return { error: "Datos inválidos" };
    }

    let s = p * c;
    let d = 0;

    if (t === "mayorista") {
        d = s * 0.10;
    } else if (t === "frecuente") {
        d = s * 0.05;
    }

    if (cu === true) {
        d = d + s * 0.05;
    }

    if (m === true) {
        d = d + s * 0.02;
    }

    let b = s - d;
    let i = b * 0.15;
    let en = 0;

    if (e === true) {
        if (b < 500) {
            en = 50;
        } else {
            en = 0;
        }
    }

    let total = b + i + en;

    if (total < 0) {
        return { error: "Total inválido" };
    }

    return {
        subtotal: s,
        descuento: d,
        impuesto: i,
        envio: en,
        total: total
    };
}

module.exports = { calcularVenta };
