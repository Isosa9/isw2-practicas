
function calcularMora(monto, diasVencidos) {
    if (typeof monto !== 'number' || !Number.isFinite(monto)) {
        throw new TypeError('El monto debe ser un número');
    }

    if (typeof diasVencidos !== 'number' || !Number.isFinite(diasVencidos)) {
        throw new TypeError('Los días vencidos deben ser un número');
    }

    if (monto < 0) {
        throw new RangeError('El monto no puede ser negativo');
    }

    if (diasVencidos > 0) {
        return monto * 0.05;
    }

    return 0;
}

module.exports = { calcularMora };
