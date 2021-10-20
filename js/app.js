//https://pokeapi.co/api/v2/pokemon///
let pokemon1,pokemon2;
let nombre1,nombre2;
let ataque1,ataque2;
let defensa1,defensa2;
let velocidad1,velocidad2;

window.onload = function or(){
    duelo();
}

function duelo(){
    let aleatorio = Math.round(Math.random()*(100-1)+parseInt(1));;
    let aleatorio2 = Math.round(Math.random()*(100-2)+parseInt(1));;
    pokemon1 = document.getElementById("poke_01");
    pokemon2 = document.getElementById("poke_02");
    nombre1 = document.getElementById("nombre_1");
    nombre2 = document.getElementById("nombre_2");
    ataque1 = document.getElementById("ataque1");
    ataque2 = document.getElementById("ataque2");
    defensa1 = document.getElementById("defensa1");
    defensa2 = document.getElementById("defensa2");
    velocidad1 = document.getElementById("velocidad1");
    velocidad2 = document.getElementById("velocidad2");

    traerDatos(pokemon1,nombre1,ataque1,defensa1,velocidad1,aleatorio);
    traerDatos(pokemon2,nombre2,ataque2,defensa2,velocidad2,aleatorio2);
}

function traerDatos(contenedor,nombre,ataque,defensa,velocidad,id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(data => {
    contenedor.src = data.sprites.other.dream_world.front_default; 
    nombre.innerHTML = data.name;
    ataque.innerHTML = "Ataque: " + data.stats[1].base_stat;
    defensa.innerHTML = "Defensa: " + data.stats[2].base_stat;
    velocidad.innerHTML = "Velocidad: " + data.stats[5].base_stat;
   })
}