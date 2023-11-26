function inicial() {
    var valoresMostrados = document.getElementById('valoresMostrados');
    if (jugadorActual === 1) {
        document.getElementById('mostrarValores').remove()
        valoresMostrados.innerHTML = `Selecciona el Pokémon del jugador ${jugadorActual}: <input type="password" id='seleccion'>`;
        valoresMostrados.innerHTML += "<button onclick='inicial()'>Seleccionar Pokémon inicial</button>";
        document.getElementById('seleccion').style.display = 'block';
        document.getElementById('seleccion').setAttribute('oninput', 'guardarPokemonInicial(1)');
        jugadorActual++;
    } else if (jugadorActual === 2) {
        valoresMostrados.innerHTML = `Selecciona el Pokémon del jugador ${jugadorActual}: <input type="password" id='seleccion'>`;
        valoresMostrados.innerHTML += "<button onclick='inicial()'>Seleccionar Pokémon inicial</button>";
        document.getElementById('seleccion').style.display = 'block';
        document.getElementById('seleccion').setAttribute('oninput', 'guardarPokemonInicial(2)');
        jugadorActual++;
    } else {
        valoresMostrados.innerHTML = `El jugador 1 empieza usando a ${pokemonsSeleccionados1[pokemonInicial1].nombre}`;
        valoresMostrados.innerHTML += `<br>El jugador 2 empieza usando a ${pokemonsSeleccionados2[pokemonInicial2].nombre}`;
        botonEmpezar.style.display = 'inline-block';
    }
}

if (pokemonsSeleccionados1[pokemonActual1].estadisticas.velocidad >
    pokemonsSeleccionados2[pokemonActual2].estadisticas.velocidad) {
    atacar(pokemonsSeleccionados1[pokemonActual1], pokemonsSeleccionados2[pokemonActual2],
        valorJugador1);
    console.log("Atacó el 1er pok")
} else {
    atacar(pokemonsSeleccionados2[pokemonActual2], pokemonsSeleccionados1[pokemonActual1],
        valorJugador2);
    console.log("Atacó el 2do pok")
}
contAccion = 1;
}

function guardarPokemonInicial(jugador) {
    var seleccionInput = document.getElementById('seleccion');
    var seleccion = document.getElementById('seleccion').value;

    if (isNaN(seleccion) || seleccion < 1 || seleccion > 3) {
        seleccionInput.value = '';
        return;
    }

    if (jugador === 1) {
        pokemonInicial1 = seleccion - 1;
        pokemonActual1 = seleccion - 1;
    } else if (jugador === 2) {
        pokemonInicial2 = seleccion - 1;
        pokemonActual2 = seleccion - 1;
    }
}


function updatepokemonsSeleccionados1() {
    pokemonsSeleccionados1 = [];
    const checkboxes = document.querySelectorAll('input[name="pokemonJugador1"]:checked');

    checkboxes.forEach(checkbox => {
        pokemonsSeleccionados1.push(Object.values(pokemons)[checkbox.value]);
    });
}

function updatepokemonsSeleccionados2() {
    pokemonsSeleccionados2 = [];
    const checkboxes = document.querySelectorAll('input[name="pokemonJugador2"]:checked');

    checkboxes.forEach(checkbox => {
        pokemonsSeleccionados2.push(Object.values(pokemons)[checkbox.value]);
    });
}


function limitarSeleccion(fieldset, updateFunction) {
    const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
    const limite = 3;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const marcadas = fieldset.querySelectorAll('input[type="checkbox"]:checked');

            if (marcadas.length > limite) {
                checkbox.checked = false;
            }
            updateFunction();
        });
    });
}

const fieldset1 = document.querySelector('fieldset:nth-of-type(1)');
const fieldset2 = document.querySelector('fieldset:nth-of-type(2)');


function mostrarAtaques() {
    listaAtaques(pokemonsSeleccionados1[pokemonActual1]);
    listaAtaques(pokemonsSeleccionados2[pokemonActual2])
}

function mostrarVida() {
    var vida1 = document.getElementById('vida1');
    var vida2 = document.getElementById('vida2');
    var numeroVida1 = document.getElementById('numeroVida1');
    var numeroVida2 = document.getElementById('numeroVida2');
    console.log(pokemons)
    var anchoBarra = (pokemonsSeleccionados1[pokemonActual1].estadisticas.vida / pokemonsSeleccionados1[pokemonActual1].estadisticas.vida) * 100;
    vida1.style.width = anchoBarra + '%';

    numeroVida1.innerText = pokemonsSeleccionados1[pokemonActual1].estadisticas.vida;

    var anchoBarra = (pokemonsSeleccionados2[pokemonActual2].estadisticas.vida / pokemonsSeleccionados2[pokemonActual2].estadisticas.vida) * 100;
    vida2.style.width = anchoBarra + '%';

    numeroVida2.innerText = pokemonsSeleccionados2[pokemonActual2].estadisticas.vida;
}



function encontrarPosicion(nombrePokemon) {
    let nombresPokemons = Object.keys(POKEMONS1);
    for (let i = 0; i < nombresPokemons.length; i++) {
        if (POKEMONS1[nombresPokemons[i]].nombre === nombrePokemon) {
            return i;
        }
    }
}


function precision(valor) {
    return valor > (Math.floor(Math.random() * 101));
}

function fallido() {
    console.log("¡El ataque ha fallado!")
}
