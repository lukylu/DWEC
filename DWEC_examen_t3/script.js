// Código necesario para guardar las URLs en un array
let urls = [];

// Mostrar el día actual
document.getElementById('currentDay').textContent = new Date().getDate();

// Código para el correcto funcionamiento del botón URL Randomizer
document.getElementById('randomizeButton').addEventListener('click', function() {
    const input = document.getElementById('urlInput').value.trim();
    const newUrls = input.split(',').map(url => url.trim()).filter(url => url);

    // Añadir las nuevas URLs al array existente
    urls.push(...newUrls);
    
    // Código para actualizar la UI
    document.getElementById('urlInput').value = '';
    document.getElementById('urlCount').textContent = urls.length;
    document.getElementById('urlList').textContent = urls.join(', ');
    
    // Seleccionar una URL aleatoria y abrirla en una nueva pestaña
    const randomUrl = Math.floor(Math.random() * urls.length);
    
    // Actualizar la UI con el número aleatorio y la URL seleccionada
    document.getElementById('randomNumber').textContent = randomUrl;
    document.getElementById('urlOn').textContent = urls[randomUrl];
    window.open(urls[randomUrl], '_blank');
});