/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   var cuadrado = Math.pow(num, 2);
    return cuadrado;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   var cubo = Math.pow(num, 3);
   return cubo;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   var exponente = Math.pow(num, exponent);
   return exponente;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   var redondea = Math.round(num);
   return redondea;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   var redondea = Math.ceil(num);
   return redondea;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   var random = Math.random(0, 1);
   return random;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
