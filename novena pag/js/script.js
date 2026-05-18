function calcularTemperatura() {
    let tempInicial = document.getElementById("tempInicial");
    let tempAmbiente = document.getElementById("tempAmbiente");
    let constanteK = document.getElementById("constanteK");
    let tiempo = document.getElementById("tiempo");
    
    let T0 = parseFloat(tempInicial.value);
    let Ts = parseFloat(tempAmbiente.value);
    let k = parseFloat(constanteK.value);
    let t = parseFloat(tiempo.value);
    
    let resultadoDiv = document.getElementById("resultado");
    
    if (isNaN(T0) || isNaN(Ts) || isNaN(k) || isNaN(t)) {
        resultadoDiv.innerHTML = `
            <p>⚠️ <strong>Error</strong> ⚠️</p>
            <div class="detalle">Por favor, completa todos los campos con números válidos.</div>
        `;
        return;
    }
    
    let temperatura = Ts + (T0 - Ts) * Math.exp(-k * t);
    
    let temperaturaRedondeada = Math.round(temperatura);
    
    resultadoDiv.innerHTML = `
        <p>🌡️ <strong>Temperatura después de ${t} horas</strong> 🌡️</p>
        <div class="temperatura">${temperaturaRedondeada}°F</div>
        <div class="detalle">
            Fórmula aplicada: T = ${Ts} + (${T0} - ${Ts}) × e<sup>-${k}×${t}</sup><br>
            Resultado exacto: ${temperatura.toFixed(2)}°F → redondeado a ${temperaturaRedondeada}°F
        </div>
    `;
}

function cargarEjemplo() {
    document.getElementById("tempInicial").value = "120";
    document.getElementById("tempAmbiente").value = "38";
    document.getElementById("constanteK").value = "0.45";
    document.getElementById("tiempo").value = "3";
    
    calcularTemperatura();
}

document.addEventListener("DOMContentLoaded", function() {

    let boton = document.getElementById("calcularBtn");
    
    boton.addEventListener("click", calcularTemperatura);
    
    cargarEjemplo();
});