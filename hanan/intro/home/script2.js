var num = 10;

var w = window.innerWidth;
var h = window.innerHeight;

var dirx = [];
var diry = [];

for (i = 0; i < num; i++) {
    //Crear corazon
    let heart = document.createElement("DIV");
    heart.className = "heart";
    document.body.appendChild(heart);
    //Asignar tamaño
    let tam = Math.floor((Math.random() * 20) + 15);
    heart.style.width = tam + "px";
    heart.style.height = tam + "px";
    //Asignar posicion inicial
    let posy = Math.floor((Math.random() * 0.1 * h) + 0.8 * h);
    heart.style.top = posy + "px";
    let posx = Math.floor((Math.random() * 0.8 * w) + 0.1 * h);
    heart.style.left = posx + "px";
    //Crear vector direccion y id
    heart.id = "h" + i;
    diry[i] = Math.floor((Math.random() * 5) - 10);
    dirx[i] = Math.floor((Math.random() * 10) - 5);
    //Asignar evento
    heart.setAttribute("onclick", "deleteheart(this)")
}

window.requestAnimationFrame(move);
setInterval(function () {
    move()
}, 60);

function move() {

    for (i = 0; i < num; i++) {
        //Seleccion de corazon
        let heart = document.getElementById("h" + i);
        //Aumento de coordenadas
        let y = parseInt(heart.style.top) + diry[i];
        let x = parseInt(heart.style.left) + dirx[i];
        //Reinicio de coordenadas
        if (x > 0.8 * w) { x = 0.2 * w; }
        if (x < 0.2 * w) { x = 0.8 * w; }
        if (y < 0.2 * h) { y = 0.8 * h; }
        if (y > 0.8 * h) { y = 0.2 * w; }
        //Asigmnacion de coordenadas
        heart.style.top = y + "px";
        heart.style.left = x + "px";
    }
}

function deleteheart(element) {
    element.style.display = "none";
}