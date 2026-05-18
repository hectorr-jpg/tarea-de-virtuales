function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function combinacion(n, r) {
    if (r > n || n < 0 || r < 0) {
        return 0;
    }

    let numerador = factorial(n);
    let denominador = factorial(r) * factorial(n - r);
    return numerador / denominador;
}


function calcularPowerball() {

    let n1 = document.getElementById("numeros");
    let r1 = document.getElementById("elegidos");
    let n2 = document.getElementById("powerballNumeros");
    let r2 = document.getElementById("powerballElegidos");
    
    let numPrincipales = parseInt(n1.value);
    let elegidosPrincipales = parseInt(r1.value);
    let numPowerball = parseInt(n2.value);
    let elegidosPowerball = parseInt(r2.value);
    
    let combosPrincipales = combinacion(numPrincipales, elegidosPrincipales);
    let combosPowerball = combinacion(numPowerball, elegidosPowerball);
    

    let totalCombinaciones = combosPrincipales * combosPowerball;
    
    let resultadoDiv = document.getElementById("resultado");
    

    let totalFormateado = totalCombinaciones.toLocaleString('es-ES');
    

    resultadoDiv.innerHTML = `
        <p>✨ <strong>Total de combinaciones posibles</strong> ✨</p>
        <div class="numero">${totalFormateado}</div>
        <div class="detalle">
            C(59,5) = ${combosPrincipales.toLocaleString('es-ES')}<br>
            C(35,1) = ${combosPowerball.toLocaleString('es-ES')}<br>
            Multiplicando ambos resultados obtenemos el total.
        </div>
    `;
}


document.addEventListener("DOMContentLoaded", function() {

    let boton = document.getElementById("calcularBtn");
    
    boton.addEventListener("click", calcularPowerball);
    
    
    calcularPowerball();
});