/**
 * The function insert() takes a parameter num, and then sets the variable numero to the innerHTML of
 * the element with the id resultado, and then sets the innerHTML of the element with the id resultado
 * to the value of numero plus the value of num.
 * @param num - The number that is being inserted into the calculator.
 */
function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

/**
 * It takes the element with the id of "resultado" and sets its innerHTML to "0".
 */
function clean() {
    document.getElementById('resultado').innerHTML =  "0";
}

/**
 * It gets the innerHTML of the element with the id of resultado, then it sets the innerHTML of the
 * element with the id of resultado to the resultado variable minus the last character.
 * </code>
 */
function backspace() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

/**
 * It gets the value of the element with the id of 'resultado' and if it's not empty, it evaluates the
 * value and sets the value of the element with the id of 'resultado' to the result of the evaluation.
 */
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}