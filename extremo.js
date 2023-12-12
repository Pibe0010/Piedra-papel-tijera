//  variables  bottones seleccion por id
var opt_piedra = document.getElementById("piedra");
var opt_papel = document.getElementById("papel");
var opt_tijera = document.getElementById("tijera");
var opt_lagarto = document.getElementById("lagarto");
var opt_spock = document.getElementById("spock");

// variables Mostrar seleccion de usuarios
var sell_player1 = document.getElementById("player1");
var sell_player2 = document.getElementById("player2");

//Variable de resultado
var ptos_player1 = document.getElementById("ptos_player1").innerText;
var ptos_player2 = document.getElementById("ptos_player2").innerText;

// variables de players
var select_player1;
var select_player2;
var vs;

// Variable de inicio 
var start = document.getElementById("start");

//funcion de jugar 
start.onclick = function() {
    select_player2 = opt_random(val_opt_random.toString());
    display_option_player(select_player2);
    game_vs(select_player1, select_player2.toString());
}

// Funcion de seleccion de ataque
opt_piedra.onclick = function() {
    select_player1 = "piedra"
    sell_player1.innerHTML = `<p>🗿</p>`

}
opt_papel.onclick = function() {
    select_player1 = "papel"
    sell_player1.innerHTML = `<p>📄</p>`
    
}
opt_tijera.onclick = function() {
    select_player1 = "tijera"
    sell_player1.innerHTML = `<p>✂️</p>`
}
opt_lagarto.onclick = function() {
    select_player1 = "lagarto"
    sell_player1.innerHTML = `<p>🦎</p>`
}
opt_spock.onclick = function() {
    select_player1 = "spock"
    sell_player1.innerHTML = `<p>🖖</p>`
}

// Seleccion de CPU random
var val_opt_random = ["piedra","papel","tijera","lagarto","spock"];
function opt_random() {
    return[...val_opt_random]
    .sort(()=>Math.random() > 0.5 ? 1:-1)
    .slice(0,1);
}

function display_option_player(select_player2) {
    if(select_player2 == "piedra") {
        sell_player2.innerHTML = `<p>🗿</p>`

    } else if(select_player2 == "papel") {
        sell_player2.innerHTML = `<p>📄</p>`

    } else if(select_player2 == "tijera") {
        sell_player2.innerHTML = `<p>✂️</p>`

    } else if(select_player2 == "lagarto") {
        sell_player2.innerHTML = `<p>🦎</p>`
    }
    else  {
        sell_player2.innerHTML = `<p>🖖</p>`
    }
}

// Logica de resultados
function game_vs(select_player1, select_player2) {
    if(select_player1 == "piedra") {
        if(select_player2 == "piedra") {
            vs = "same";
        } else if(select_player2 == "papel") {
            vs = "p2win";
        } else if(select_player2 == "spock") {
            vs = "p2win";
        }else {
            vs = "p1win";
        }

    } else if(select_player1 == "papel") {
        if(select_player2 == "papel") {
            vs = "same";
        } else if(select_player2 == "tijera" ) {
            vs = "p2win";
        } else if(select_player2 == "lagarto") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }

    } else if(select_player1 == "tijera") {
        if(select_player2 == "tijera") {
            vs = "same";
        } else if(select_player2 == "piedra" ) {
            vs = "p2win";
        } else if(select_player2 == "spock") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }

    } else if(select_player1 == "lagarto") {
        if(select_player2 == "lagarto") {
            vs = "same";
        } else if(select_player2 == "tijera" ) {
            vs = "p2win";
        } else if(select_player2 == "pidra") {
            vs = "p2win";
        } else {
            vs = "p1win";
        }

    } else if(select_player1 == "spock") {
        if(select_player2 == "spock") {
            vs = "same";
        } else if(select_player2 == "lagarto" ) {
            vs = "p2win";
        } else if(select_player2 == "papel"){
            vs = "p2win";
        } else {
            vs = "p1win";
        }
    } 

    if(vs == "p1win") {
        document.getElementById("result").innerText = "Player1 gana";
        document.getElementById("result").style.color = "#3FA796";
        ptos_player1++;
        document.getElementById("ptos_player1").innerText = ptos_player1;

    } else if(vs == "same") {
        document.getElementById("result").innerText = "Empate";
        document.getElementById("result").style.color = "#FEC260";

    } else if(vs == "p2win") {
        document.getElementById("result").innerText = "Player2 gana";
        document.getElementById("result").style.color = "#A10035";
        ptos_player2++;
        document.getElementById("ptos_player2").innerText = ptos_player2;
    }
}

// Resetear el juego al inicio
const reload = document.getElementById("reset");
reload.addEventListener("click",_=> {
    location.reload();
})