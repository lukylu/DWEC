window.onload = function() {
    const button = this.document.getElementById("button");
    const resultado = document.getElementById("resultado");
    let contador = 0;

    button.addEventListener('click', function() {
        contador++;
        resultado.textContent = contador;
    });
}