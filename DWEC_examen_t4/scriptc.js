/*
EJERCICIO DE EXAMEN: Sistema de Gestión de Restaurante

Descripción: Implementa un sistema básico para gestionar el menú y los pedidos 
de un restaurante.

Puntuación total: 10 puntos

El examen consta de 3 ejercicios con un valor de 3 puntos cada uno
El punto extra será por realizar un código ordenado y bien comentado

*/

// Base de datos del menú (no modificar)
const menu = [
    {
        id: 1,
        nombre: "Pizza Margarita",
        precio: 12.50,
        tipo: "Principal",
        calorias: 800,
        vegetariano: true
    },
    {
        id: 2,
        nombre: "Ensalada César",
        precio: 8.00,
        tipo: "Entrante",
        calorias: 350,
        vegetariano: false
    },
    {
        id: 3,
        nombre: "Tarta de chocolate",
        precio: 5.50,
        tipo: "Postre",
        calorias: 450,
        vegetariano: true
    },
    {
        id: 4,
        nombre: "Pasta Carbonara",
        precio: 11.00,
        tipo: "Principal",
        calorias: 650,
        vegetariano: false
    }
];

// Registro de pedidos del día
const pedidosDelDia = [];

/*
EJERCICIO 1: (3 puntos)
Crear una función que filtre platos del menú según dos criterios:
- Recibe un rango de calorías (mínimo y máximo)
- Debe retornar un array con los platos cuyas calorías estén dentro del rango
- El array resultante debe contener el nombre del plato y sus calorías
- Si no se encuentra ningún plato, retornar un array vacío

Ejemplo de uso: 
filtrarPorCalorias(300, 500)  // Retorna platos entre 300 y 500 calorías
*/
function filtrarPorCalorias(minimo, maximo) {

    // Creamos un objeto con las características que queremos que devuelva una vez el script se ejecute en la consola
    let arrayplatos1 = [];

    // Creamos un bucle for que recorrerá todas las variables de nuestro array hasta que "i" sea mayor que el número de variables dentro del array
    for(i = 0; i < menu.length; i++){

        // Creamos el if que en este caso se ejecutará si la variable "minimo" es menor o igual 
        if(minimo <= menu[i].calorias && maximo >= menu[i].calorias){

            let plato = {nombre: "", precio: "", tipo: "", calorias: ""}

            // Cargamos a las variables de nuestro objeto los valores que queremos que se carguen en él
            plato.nombre = menu[i].nombre;
            plato.calorias = menu[i].calorias;

            // Devolvemos los valores a nuestro objeto
            arrayplatos1.push(plato);

        }
        
    }
    return arrayplatos1;
}

/*
EJERCICIO 2: (3 puntos)
Crear una función que calcule el menú completo más económico.
- Debe seleccionar un plato de cada tipo (Entrante, Principal, Postre)
- Calcular el precio total del menú
- Retornar un objeto con:
  * Array con los nombres de los 3 platos seleccionados
  * Precio total del menú
  * Calorías totales del menú
- Si falta algún tipo de plato en el menú, retornar mensaje de error

Ejemplo de uso: calcularMenuEconomico()
*/
function calcularMenuEconomico() {

}

/*
EJERCICIO 3: (3 puntos)
Crear una función que calcule estadísticas de los platos vegetarianos.
Debe retornar un objeto con:
- Cantidad de platos vegetarianos en el menú
- Precio promedio de los platos vegetarianos
- Nombre del plato vegetariano más caro

Ejemplo de uso: estadisticasVegetarianos()
*/
function estadisticasVegetarianos() {

    // Creamos un array con las características que queremos que devuelva una vez el script se ejecute en la consola
    let arrayplatos2=[];

    // Creamos un bucle for que recorrerá todas las variables de nuestro array hasta que "i" sea mayor que el número de variables dentro del array
    for(i = 0; i < menu.length; i++){

        // Creamos el if que en este caso se ejecutará si la variable "vegetariano" de nuestro array es "true"
        if(menu[i].vegetariano == true){
            let estadisticasVegetariana = {nombre: "", precio: "", tipo: "", calorias: "", vegetariano: ""}

            // Cargamos a las variables de nuestro objeto los valores que queremos que se carguen en él
            estadisticasVegetariana.nombre = menu[i].nombre;
            estadisticasVegetariana.precio = menu[i].precio;
            estadisticasVegetariana.tipo = menu[i].tipo;
            estadisticasVegetariana.calorias = menu[i].calorias;
            estadisticasVegetariana.vegetariano = menu[i].vegetariano;

            // Devolvemos los valores a nuestro objeto
            arrayplatos2.push(estadisticasVegetariana);

        }
    }
    return arrayplatos2;
}

// PRUEBAS (no modificar)
console.log("=== Pruebas del Sistema ===");

// Prueba 1: Filtrar por calorías
console.log("\n1. Filtrando platos entre 300 y 500 calorías:");
console.log(filtrarPorCalorias(300, 500));
console.log("\nFiltrando platos entre 600 y 900 calorías:");
console.log(filtrarPorCalorias(600, 900));

// Prueba 2: Menú económico
console.log("\n2. Calculando menú completo más económico:");
console.log(calcularMenuEconomico());

// Prueba 3: Estadísticas vegetarianos
console.log("\n3. Calculando estadísticas de los platos vegetarianos:");
console.log(estadisticasVegetarianos());