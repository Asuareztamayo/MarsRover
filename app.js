//Variables necesarias para empezar
let planet = [];
let commands;
let D = ["N", "S", "E", "W"];
let width = 5;
let height = 5;

//Generamos el planeta o tablero segun el width y el height designados, creando un array bidimensional
function space(height, width) {
    for (let i = 0; height >= i; i++) {
        planet.push([]);
    for (let w = 0; width >= w; w++) {
        planet[i].push(0);
    }
    }
    return planet;
}
space(width, height);

//asi podremos ver desde la consola nuestro "tablero"
console.log(space());

//posicionamos el Rover
function rover(x, y) {
    planet[y][x] = "R";
}
rover(2, 5);

//Segun el tamaño de nuestro planeta, utilizaremos un 25% de su espacio en obstaculos, repartidos aleatoriamente por el tablero
function obstacles(planet) {
  obst = Math.floor(width * height * 0.25);
    //vemos la cantidad de obstaculos que habran en el tablero
    console.log(obst);
    for (let i = 0; obst >= i; i++) {
    nroX = Math.floor(Math.random(0, height) * obst);
    nroY = Math.floor(Math.random(0, width) * obst);

    if (planet[nroY][nroX] == 0) {
        planet[nroY][nroX] = 1;
    }
    }
    //comporbamos que estan los obstaculos necesarios
    console.log(planet);
}

obstacles(planet);


//nuestros obstaculos apareceran como un 1 en el tablero, con esto comprobaremos el paso
function alarm(x, y) {
  if (planet[y][x] == 1) {
    return true;
  }
}



//Aqui intente de varias formas generar el movimiento del rover, la primera que intente fue la funcion que empieza en la linea 123, pero no pude pasar los parametros correctamente, la segunda es eliminar de la equacion los puntos cardinales y hacer como si solo pudiera ir hacia el frente, izquierda o derecha.

function moveFront() {
    newY = y + 1;
    if (newY > y) {
    newY = 0;
    }
    if (alarm(newY, x) == False) {
    (planet[y][x] = 0), (planet[newY][x] = rover());
    y = newY;
    } else {
    window.alert("Obstacle! Send new move");
    }
    console.log("move to front");
}

function moveLeft() {
    newX = x - 1;
    if (newX < x) {
    newX = width;
    }
    if (alarm(newX, y) == False) {
    (planet[y][x] = 0), (planet[newX][y] = rover());
    x = newX;
    } else {
    window.alert("Obstacle! Send new move");
    console.log("move to left");
    }
}

function moveRight() {
    newX = x + 1;
    if (newX > x) {
    newX = 0;
    }
    if (alarm(newX, y) == False) {
    (planet[y][x] = 0), (planet[newX][y] = rover());
    x = newX;
    } else {
    window.alert("Obstacle! Send new move");
    }
    console.log("move to right");
}

function MoveRover(commands) {
    switch (commands) {
    case "L":
        moveLeft();
        break;

    case "R":
        moveRight();
        break;

    case "F":
        moveFront();
        break;

    default:
        break;
    }
}

// MoveRover("L");

function move(D, mov){
    if(D == N && mov == F || D == E && mov == L || D == W && mov == R){
        newY = y + 1
        if (newY > y){
            newY = 0;
        }
        if (alarm(newY, x)== False){
            planet[y][x] = 0,
            planet[newY][x] = rover()
            y = newY
        }
        console.log('hi1')
    }else{
        window.alert("Obstacle! Send new move");
    }
    if(D == S && mov == F || D == E && mov == R || D == W && mov == L){
        newY = y - 1
        if (newY < y){
            newY = height;
        }
        if (alarm(newY, x)== False){
            planet[y][x] = 0,
            planet[newY][x] = rover()
            y = newY
        }
        console.log('hi2')
    }else{
        window.alert("Obstacle! Send new move");
    }
    if(D == S && mov == R || D == N && mov == L || D == W && mov == F){
        newX = x - 1
        if (newX < x){
            newX = width;
        }
        if (alarm(newX, y)== False){
            planet[y][x] = 0,
            planet[newX][y] = rover()
            x = newX
        }
        console.log('hi3')
    }else{
        window.alert("Obstacle! Send new move");
    }
    if(D == S && mov == L || D == N && mov == R || D == E && mov == F){
        newX = x + 1
        if (newX > x){
            newX = 0;
        }
        if (alarm(newX, y)== False){
            planet[y][x] = 0,
            planet[newX][y] = rover()
            x = newX
        }else{
        window.alert("Obstacle! Send new move");
    }
}
}

