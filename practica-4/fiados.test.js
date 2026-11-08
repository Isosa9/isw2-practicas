
const { calcularMora } = require('./fiados');

function assertEqual(actual, esperado) {
    if (actual !== esperado) {
        throw new Error(`Esperado ${esperado}, recibido ${actual}`);
    }
}

function assertThrows(fn, tipoError) {
    try {
        fn();
    } catch (error) {
        if (error instanceof tipoError) return;
        throw new Error(`Se esperaba ${tipoError.name}`);
    }
    throw new Error(`Se esperaba un error ${tipoError.name}`);
}

function test(nombre, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${nombre}`);
    } catch (error) {
        console.log(`❌ FAIL: ${nombre} - ${error.message}`);
        process.exitCode = 1;
    }
}

// PRUEBAS RED: escritas antes de implementar la función
test('Calcula el 5% cuando hay días vencidos', () => {
    assertEqual(calcularMora(1000, 5), 50);
});

test('No cobra mora cuando no hay días vencidos', () => {
    assertEqual(calcularMora(1000, 0), 0);
});



test('Calcula mora para un monto de 500', () => {
    assertEqual(calcularMora(500, 2), 25);
});

test('Permite un monto de cero', () => {
    assertEqual(calcularMora(0, 5), 0);
});

test('Lanza error cuando el monto es negativo', () => {
    assertThrows(() => calcularMora(-100, 5), RangeError);
});

test('Lanza error cuando los días no son un número', () => {
    assertThrows(() => calcularMora(1000, 'cinco'), TypeError);
});
