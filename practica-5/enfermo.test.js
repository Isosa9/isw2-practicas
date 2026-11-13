
const assert = require("assert");
const { calcularVenta } = require("./enfermo");

// TEST 1: Venta normal sin descuentos
const venta1 = calcularVenta(100, 1, "normal", false, false, false);

assert.strictEqual(venta1.subtotal, 100);
assert.strictEqual(venta1.total, 115);

// TEST 2: Cliente mayorista
const venta2 = calcularVenta(100, 2, "mayorista", false, false, false);

assert.strictEqual(venta2.descuento, 20);
assert.strictEqual(venta2.total, 207);

// TEST 3: Cliente frecuente
const venta3 = calcularVenta(100, 1, "frecuente", false, false, false);

assert.strictEqual(venta3.descuento, 5);
assert.strictEqual(venta3.total, 109.25);

// TEST 4: Venta con cupón y membresía
const venta4 = calcularVenta(100, 2, "normal", true, true, false);

assert.strictEqual(venta4.descuento, 14);
assert.strictEqual(venta4.total, 213.9);

// TEST 5: Venta con envío
const venta5 = calcularVenta(100, 1, "normal", false, false, true);

assert.strictEqual(venta5.envio, 50);
assert.strictEqual(venta5.total, 165);

// TEST 6: Datos inválidos
const venta6 = calcularVenta(-100, 1, "normal", false, false, false);

assert.strictEqual(venta6.error, "Datos inválidos");

console.log("Todos los tests pasaron correctamente.");
