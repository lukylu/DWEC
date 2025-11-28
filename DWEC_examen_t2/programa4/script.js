//Pedimos al usuario la temperatura y la unidad
let temp = parseFloat(prompt("Introduce la temperatura:"));
let unidad = prompt("Introduce la unidad, 'C' o 'F'(EN MAYÚSCULAS): ");

//Comprobamos la unidad y hacemos la conversión de una a otra
if (unidad === "C") {
    f = temp * 1.8 + 32;
    document.write(temp + "°C son " + f + "°F");
} else if (unidad === "F") {
    c = (temp - 32) / 1.8;
    document.write(temp + "°F son " + c + "°C");
} else {
    document.write("Unidad no válida. Usa 'C' o 'F' (EN MAYÚSCULAS)");
}
