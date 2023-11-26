const EFECTIVIDAD = {
    normal: [],
    agua: ["Fuego", "Roca", "Tierra"],
    planta: ["Agua", "Roca", "Tierra"],
    fuego: ["Bicho", "Hielo", "Planta"],
    electrico: ["Agua", "Volador"],
    veneno: ["Planta"],
    psiquico: ["Lucha", "Veneno"],
    roca: ["Bicho", "Fuego", "Hielo", "Volador"],
    tierra: ["Eléctrico", "Fuego", "Roca", "Veneno"],
    volador: ["Bicho", "Lucha", "Planta"],
    bicho: ["Planta", "Psíquico"],
    fantasma: ["Fantasma", "Psíquico"],
    hielo: ["Planta", "Tierra", "Volador"],
    lucha: ["Hielo", "Normal", "Roca"]
}

const DEBILIDAD = {
    normal: ["Roca"],
    agua: ["Agua", "Planta"],
    planta: ["Bicho", "Fuego", "Planta", "Veneno", "Volador"],
    fuego: ["Agua", "Fuego", "Roca"],
    electrico: ["Eléctrico", "Planta"],
    veneno: ["Fantasma", "Roca", "Tierra", "Veneno"],
    psiquico: ["Psíquico"],
    roca: ["Lucha", "Tierra"],
    tierra: ["Bicho", "Planta"],
    volador: ["Eléctrico", "Roca"],
    bicho: ["Fantasma", "Fuego", "Lucha", "Veneno", "Volador"],
    fantasma: [],
    hielo: ["Agua", "Fuego", "Hielo"],
    lucha: ["Bicho", "Psíquico", "Veneno", "Volador"]
}

const INMUNIDAD = {
    normal: ["Fantasma"],
    agua: [],
    planta: [],
    fuego: [],
    electrico: ["Tierra"],
    veneno: [],
    psiquico: [],
    roca: [],
    tierra: ["Volador"],
    volador: [],
    bicho: [],
    fantasma: [],
    hielo: [],
    lucha: ["Fantasma"]
}

const TIPOS_ATAQUE = {
    fisico: ["Normal", "Volador", "Veneno", "Tierra", "Roca", "Lucha", "Fantasma", "Bicho"],
    especial: ["Psíquico", "Planta", "Hielo", "Fuego", "Eléctrico", "Agua"]
}


var ataques = {
    gruñido: [
        {
            nombre: "Gruñido", tipo: "Normal", poder: 0, usosRestantes: 40, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    cabezazo: [
        {
            nombre: "Cabezazo", tipo: "Normal", poder: 130, usosRestantes: 10, precision: 100,
            dobleTurno: 2, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    ataqueRapido: [
        {
            nombre: "Ataque Rápido", tipo: "Normal", poder: 40, usosRestantes: 30, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    hiperRayo: [
        {
            nombre: "Hiper rayo", tipo: "Normal", poder: 150, usosRestantes: 5, precision: 90,
            dobleTurno: 1, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    superDiente: [
        {
            nombre: "Super diente", tipo: "Normal", poder: 1, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    canto: [
        {
            nombre: "Canto", tipo: "Normal", poder: 0, usosRestantes: 15, precision: 55,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    golpeCuerpo: [
        {
            nombre: "Golpe Cuerpo", tipo: "Normal", poder: 85, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, efectoSecundario: "Paralizar", porcentajeEfecto: 30,
            tipoAtaque: "Físico"
        },
    ],
    megaPatada: [
        {
            nombre: "Mega patada", tipo: "Normal", poder: 120, usosRestantes: 5, precision: 75,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    cuchillada: [
        {
            nombre: "Cuchillada", tipo: "Normal", poder: 70, usosRestantes: 20, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    dobleFilo: [
        {
            nombre: "Doble filo", tipo: "Normal", poder: 120, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, efectoSecundario: "Retroceso", porcentajeEfecto: 25,
            tipoAtaque: "Físico"
        },
    ],
    megaPunyo: [
        {
            nombre: "Mega puño", tipo: "Normal", poder: 80, usosRestantes: 20, precision: 85,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        }
    ],
    explosion: [
        {
            nombre: "Explosión", tipo: "Normal", poder: 250, usosRestantes: 5, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    deslumbrar: [
        {
            nombre: "Deslumbrar", tipo: "Normal", poder: 0, usosRestantes: 30, precision: 75,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, tipoAtaque: "Físico"
        },
    ],
    surf: [
        {
            nombre: "Surf", tipo: "Agua", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.agua, debilidad: DEBILIDAD.agua,
            inmunidad: INMUNIDAD.agua, tipoAtaque: "Especial"
        },
    ],
    hidroBomba: [
        {
            nombre: "Hidro bomba", tipo: "Agua", poder: 110, usosRestantes: 5, precision: 80,
            dobleTurno: 0, efectividad: EFECTIVIDAD.agua, debilidad: DEBILIDAD.agua,
            inmunidad: INMUNIDAD.agua, tipoAtaque: "Especial"
        }
    ],
    somnifero: [
        {
            nombre: "Somnífero", tipo: "Planta", poder: 0, usosRestantes: 15, precision: 80,
            dobleTurno: 0, efectividad: EFECTIVIDAD.planta, debilidad: DEBILIDAD.planta,
            inmunidad: INMUNIDAD.planta, tipoAtaque: "Especial"
        },
    ],
    rayoSolar: [
        {
            nombre: "Rayo Solar", tipo: "Planta", poder: 120, usosRestantes: 10, precision: 100,
            dobleTurno: 2, efectividad: EFECTIVIDAD.planta, debilidad: DEBILIDAD.planta,
            inmunidad: INMUNIDAD.planta, tipoAtaque: "Especial"
        }
    ],
    lanzallamas: [
        {
            nombre: "Lanzallamas", tipo: "Fuego", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.fuego, debilidad: DEBILIDAD.fuego,
            inmunidad: INMUNIDAD.fuego, efectoSecundario: "Quemar", porcentajeEfecto: 10,
            tipoAtaque: "Especial"
        }
    ],
    ondaTrueno: [
        {
            nombre: "Onda trueno", tipo: "Eléctrico", poder: 0, usosRestantes: 20, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.electrico, debilidad: DEBILIDAD.electrico,
            inmunidad: INMUNIDAD.electrico
        },
    ],
    ataqueAereo: [
        {
            nombre: "Ataque aéreo", tipo: "Volador", poder: 140, usosRestantes: 5, precision: 90,
            dobleTurno: 2, efectividad: EFECTIVIDAD.volador, debilidad: DEBILIDAD.volador,
            inmunidad: INMUNIDAD.volador, tipoAtaque: "Físico"
        },
    ],
    rayo: [
        {
            nombre: "Rayo", tipo: "Eléctrico", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.electrico, debilidad: DEBILIDAD.electrico,
            inmunidad: INMUNIDAD.electrico, efectoSecundario: "Paralizar", porcentajeEfecto: 10,
            tipoAtaque: "Especial"
        },
    ],
    movimientoSismico: [
        {
            nombre: "Movimiento sísmico", tipo: "Lucha", poder: 1, usosRestantes: 20, precision: 100,
            dobleTurno: 0
        }
    ],
    terremoto: [
        {
            nombre: "Terremoto", tipo: "Tierra", poder: 100, usosRestantes: 10, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.tierra, debilidad: DEBILIDAD.tierra,
            inmunidad: INMUNIDAD.tierra, tipoAtaque: "Físico"
        }
    ],
    avalancha: [
        {
            nombre: "Avalancha", tipo: "Roca", poder: 75, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.roca, debilidad: DEBILIDAD.roca,
            inmunidad: INMUNIDAD.roca, tipoAtaque: "Físico"
        }
    ],
    agilidad: [
        {
            nombre: "Agilidad", tipo: "Psíquico", poder: 0, usosRestantes: 30, precision: 100,
            dobleTurno: 0
        },
    ],
    descanso: [
        {
            nombre: "Descanso", tipo: "Normal", poder: 0, usosRestantes: 10, precision: 100,
            dobleTurno: 0
        },
    ],
    psiquico: [
        {
            nombre: "Psíquico", tipo: "Psíquico", poder: 90, usosRestantes: 10, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.psiquico, debilidad: DEBILIDAD.psiquico,
            inmunidad: INMUNIDAD.psiquico, tipoAtaque: "Especial"
        },
    ],
    hipnosis: [
        {
            nombre: "Hipnosis", tipo: "Psíquico", poder: 0, usosRestantes: 20, precision: 60,
            dobleTurno: 0, efectividad: EFECTIVIDAD.psiquico, debilidad: DEBILIDAD.psiquico,
            inmunidad: INMUNIDAD.psiquico
        },
    ],
    comeSuenyos: [
        {
            nombre: "Come sueños", tipo: "Psíquico", poder: 100, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.psiquico, debilidad: DEBILIDAD.psiquico,
            inmunidad: INMUNIDAD.psiquico, tipoAtaque: "Especial"
        },
    ],
    ventisca: [
        {
            nombre: "Ventisca", tipo: "Hielo", poder: 110, usosRestantes: 5, precision: 70,
            dobleTurno: 0, efectividad: EFECTIVIDAD.hielo, debilidad: DEBILIDAD.hielo,
            inmunidad: INMUNIDAD.hielo, tipoAtaque: "Especial"
        },
    ],
    toxico: [
        {
            nombre: "Tóxico", tipo: "Veneno", poder: 0, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.veneno, debilidad: DEBILIDAD.veneno,
            inmunidad: INMUNIDAD.veneno, tipoAtaque: "Físico"
        },
    ]
}

var pokemons = {
    pikachu: {
        nombre: "Pikachu",
        tipo: "Eléctrico",
        estado: "Normal",
        ataques: [
            ...ataques.agilidad,
            ...ataques.rayo,
            ...ataques.ondaTrueno,
            ...ataques.megaPatada,
        ],
        estadisticas: {
            vida: 274,
            ataque: 229,
            defensa: 174,
            ataqueEspecial: 218,
            defensaEspecial: 196,
            velocidad: 306
        }
    },
    bulbasaur: {
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        estado: "Normal",
        ataques: [
            ...ataques.golpeCuerpo,
            ...ataques.somnifero,
            ...ataques.toxico,
            ...ataques.rayoSolar,
        ],
        estadisticas: {
            vida: 294,
            ataque: 216,
            defensa: 216,
            ataqueEspecial: 251,
            defensaEspecial: 251,
            velocidad: 207
        }
    },
    charmander: {
        nombre: "Charmander",
        tipo: "Fuego",
        estado: "Normal",
        ataques: [
            ...ataques.golpeCuerpo,
            ...ataques.gruñido,
            ...ataques.cuchillada,
            ...ataques.lanzallamas,
        ],
        estadisticas: {
            vida: 282,
            ataque: 223,
            defensa: 203,
            ataqueEspecial: 240,
            defensaEspecial: 218,
            velocidad: 251
        }
    },
    squirtle: {
        nombre: "Squirtle",
        tipo: "Agua",
        estado: "Normal",
        ataques: [
            ...ataques.surf,
            ...ataques.golpeCuerpo,
            ...ataques.cabezazo,
            ...ataques.hidroBomba,
        ],
        estadisticas: {
            vida: 292,
            ataque: 214,
            defensa: 251,
            ataqueEspecial: 218,
            defensaEspecial: 249,
            velocidad: 203
        }
    },
    pidgeotto: {
        nombre: "Pidgeotto",
        tipo: ["Normal", "Volador"],
        estado: "Normal",
        ataques: [
            ...ataques.agilidad,
            ...ataques.dobleFilo,
            ...ataques.ataqueAereo,
            ...ataques.ataqueRapido,
        ],
        estadisticas: {
            vida: 330,
            ataque: 240,
            defensa: 229,
            ataqueEspecial: 218,
            defensaEspecial: 218,
            velocidad: 265
        }
    },
    rattata: {
        nombre: "Rattata",
        tipo: "Normal",
        estado: "Normal",
        ataques: [
            ...ataques.ventisca,
            ...ataques.ataqueRapido,
            ...ataques.dobleFilo,
            ...ataques.superDiente,
        ],
        estadisticas: {
            vida: 264,
            ataque: 232,
            defensa: 185,
            ataqueEspecial: 163,
            defensaEspecial: 185,
            velocidad: 267
        }
    },
    ekans: {
        nombre: "Ekans",
        tipo: "Veneno",
        estado: "Normal",
        ataques: [
            ...ataques.toxico,
            ...ataques.avalancha,
            ...ataques.deslumbrar,
            ...ataques.golpeCuerpo,
        ],
        estadisticas: {
            vida: 274,
            ataque: 240,
            defensa: 205,
            ataqueEspecial: 196,
            defensaEspecial: 227,
            velocidad: 229
        }
    },
    jiglypuff: {
        nombre: "Jigglypuff",
        tipo: "Normal",
        estado: "Normal",
        ataques: [
            ...ataques.canto,
            ...ataques.golpeCuerpo,
            ...ataques.descanso,
            ...ataques.megaPatada,
        ],
        estadisticas: {
            vida: 434,
            ataque: 207,
            defensa: 152,
            ataqueEspecial: 207,
            defensaEspecial: 163,
            velocidad: 152
        }
    },
    meowth: {
        nombre: "Meowth",
        tipo: "Normal",
        estado: "Normal",
        ataques: [
            ...ataques.ataqueRapido,
            ...ataques.cuchillada,
            ...ataques.rayo,
            ...ataques.golpeCuerpo,
        ],
        estadisticas: {
            vida: 284,
            ataque: 207,
            defensa: 185,
            ataqueEspecial: 196,
            defensaEspecial: 196,
            velocidad: 305
        }
    },
    abra: {
        nombre: "Abra",
        tipo: "Psíquico",
        estado: "Normal",
        ataques: [
            ...ataques.psiquico,
            ...ataques.ondaTrueno,
            ...ataques.movimientoSismico,
            ...ataques.toxico,
        ],
        estadisticas: {
            vida: 254,
            ataque: 152,
            defensa: 141,
            ataqueEspecial: 339,
            defensaEspecial: 229,
            velocidad: 304
        }
    },
    machop: {
        nombre: "Machop",
        tipo: "Lucha",
        estado: "Normal",
        ataques: [
            ...ataques.movimientoSismico,
            ...ataques.megaPunyo,
            ...ataques.terremoto,
            ...ataques.megaPatada,
        ],
        estadisticas: {
            vida: 344,
            ataque: 284,
            defensa: 218,
            ataqueEspecial: 185,
            defensaEspecial: 185,
            velocidad: 185
        }
    },
    gastly: {
        nombre: "Gastly",
        tipo: ["Fantasma", "Veneno"],
        estado: "Normal",
        ataques: [
            ...ataques.psiquico,
            ...ataques.hipnosis,
            ...ataques.comeSuenyos,
            ...ataques.explosion,
        ],
        estadisticas: {
            vida: 264,
            ataque: 185,
            defensa: 174,
            ataqueEspecial: 328,
            defensaEspecial: 185,
            velocidad: 284
        }
    },
    diglett: {
        nombre: "Diglett",
        tipo: "Tierra",
        estado: "Normal",
        ataques: [
            ...ataques.cuchillada,
            ...ataques.avalancha,
            ...ataques.terremoto,
            ...ataques.golpeCuerpo,
        ],
        estadisticas: {
            vida: 224,
            ataque: 229,
            defensa: 163,
            ataqueEspecial: 185,
            defensaEspecial: 207,
            velocidad: 317
        }
    },
    geodude: {
        nombre: "Geodude",
        tipo: ["Roca", "Tierra"],
        estado: "Normal",
        ataques: [
            ...ataques.avalancha,
            ...ataques.golpeCuerpo,
            ...ataques.explosion,
            ...ataques.movimientoSismico,
        ],
        estadisticas: {
            vida: 284,
            ataque: 288,
            defensa: 328,
            ataqueEspecial: 174,
            defensaEspecial: 174,
            velocidad: 152
        }
    },
    scyther: {
        nombre: "Scyther",
        tipo: ["Bicho", "Volador"],
        estado: "Normal",
        ataques: [
            ...ataques.agilidad,
            ...ataques.dobleFilo,
            ...ataques.hiperRayo,
            ...ataques.cuchillada,
        ],
        estadisticas: {
            vida: 334,
            ataque: 271,
            defensa: 234,
            ataqueEspecial: 195,
            defensaEspecial: 231,
            velocidad: 300
        }
    },
}

// ----- Recogida de datos

//document.getElementById('botonAtacar').addEventListener('click', function () {
//    var ataqueSeleccionado = document.getElementById('ataques1').value;
//    atacar(pokemonsSeleccionados1[0], pokemonsSeleccionados2[0], ataqueSeleccionado, 0);
//});

var botonEmpezar = document.getElementById('empezar');
var combates = document.getElementById('combates');
var pokemonsSeleccionados1 = [];
var pokemonsSeleccionados2 = [];
var pokemonInicial1 = 0;
var pokemonInicial2 = 0;
var pokemonActual1 = 0;
var pokemonActual2 = 0;
var jugadorActual = 1;
var iAtaque = 1;

botonEmpezar.style.display = 'none';
combates.style.display = 'none';


document.getElementById('mostrarValores').addEventListener('click', function () {
    var valoresMostrados = document.getElementById('valoresMostrados');

    valoresMostrados.innerHTML = "";

    valoresMostrados.innerHTML += "<strong>Pokémons seleccionados jugador 1:</strong><br>";
    pokemonsSeleccionados1.forEach(function (pokemon, index) {
        valoresMostrados.innerHTML += `${pokemon.nombre} --> Opción ${index + 1}<br>`;
    });

    valoresMostrados.innerHTML += "<br>";
    valoresMostrados.innerHTML += "<strong>Pokémons seleccionados jugador 2:</strong><br>";
    pokemonsSeleccionados2.forEach(function (pokemon, index) {
        valoresMostrados.innerHTML += `${pokemon.nombre} --> Opción ${index + 1}<br>`;
    });

    if (pokemonsSeleccionados1.length === 3 && pokemonsSeleccionados2.length === 3) {
        valoresMostrados.innerHTML += "<button onclick='inicial()'>Seleccionar Pokémon inicial</button>";
    }
});

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

limitarSeleccion(fieldset1, updatepokemonsSeleccionados1);
limitarSeleccion(fieldset2, updatepokemonsSeleccionados2);

function encontrarPosicion(nombrePokemon) {
    let nombresPokemons = Object.keys(POKEMONS1);
    for (let i = 0; i < nombresPokemons.length; i++) {
        if (POKEMONS1[nombresPokemons[i]].nombre === nombrePokemon) {
            return i;
        }
    }
}

var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatepokemonsSeleccionados1);
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatepokemonsSeleccionados2);
});

document.getElementById('empezar').addEventListener('click', function () {
    combates.style.display = 'flex';
    document.getElementById('inicial').innerHTML = '';

    mostrarVida();
    mostrarAtaques();
});

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

function listaAtaques(pokemon) {
    console.log(pokemon.ataques[0].nombre)
    for (let i = 0; i < 4; i++) {
        document.getElementById(`ataques${iAtaque}`).innerHTML += `Ataque ${i + 1}:
            ${pokemon.ataques[i].nombre} --- Usos restantes:
            ${pokemon.ataques[i].usosRestantes}<br>`
    }
    if (iAtaque === 1) {
        iAtaque = 2;
    } else {
        iAtaque = 1;
    }
}



var contGruñido = 0;
var contAgilidad = 1;
var contToxico = 1;
var variar = [1.5, 2, 2.5, 3, 3.5, 4];


const POKEMONS1 = structuredClone(pokemons);
var pokemonsEstadisticasJugador1 = structuredClone(pokemons)
var pokemonsEstadisticasJugador2 = structuredClone(pokemons)


function precision(valor) {
    return valor > (Math.floor(Math.random() * 101));
}

function fallido() {
    console.log("¡El ataque ha fallado!")
}

function atacar(pokemonUsuario1, pokemonUsuario2, idAtaque, idPokemon) {
    console.log(pokemonsSeleccionados1)
    let daño = 0;
    let ataque = pokemonsSeleccionados1[idPokemon].ataques[idAtaque];
    if (ataque.poder == 0) {
        switch (ataque.nombre) {
            case "Gruñido":
                let iGruñido = encontrarPosicion(pokemonUsuario2.nombre);
                let valorAtaqueGruñido = structuredClone(Object.values(POKEMONS1)[iGruñido].estadisticas.ataque)
                let reduccionGruñido = valorAtaqueGruñido /= variar[contGruñido]
                contGruñido++;
                console.log(reduccionGruñido);
                break;
            case "Canto":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        console.log("¡El Pokémon ya está dormido!");
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        console.log("¡El Pokémon se ha dormido!");
                        break;
                    }
                }
                fallido();
                break;
            case "Somnífero":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        console.log("¡El Pokémon ya está dormido!");
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        console.log("¡El Pokémon se ha dormido!");
                        break;
                    }
                }
                fallido();
                break;
            case "Hipnosis":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        console.log("¡El Pokémon ya está dormido!");
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        console.log("¡El Pokémon se ha dormido!");
                        break;
                    }
                }
                fallido();
                break;
            case "Deslumbrar":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Paralizado") {
                        console.log("¡El Pokémon ya está paralizado!");
                        break
                    } else {
                        pokemonUsuario2.estado = "Paralizado";
                        pokemonUsuario2.estadisticas.velocidad = 0;
                        console.log("¡El Pokémon se ha paralizado!");
                        console.log(pokemonUsuario2.estadisticas.velocidad);
                        break;
                    }
                }
                fallido();
                break;
            case "Onda trueno":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Paralizado") {
                        console.log("¡El Pokémon ya está paralizado!");
                        break
                    } else {
                        pokemonUsuario2.estado = "Paralizado";
                        pokemonUsuario2.estadisticas.velocidad = 0;
                        console.log("¡El Pokémon se ha paralizado!");
                        console.log(pokemonUsuario2.estadisticas.velocidad);
                        break;
                    }
                }
                fallido();
                break;
            case "Agilidad":
                let iAgilidad = encontrarPosicion(pokemonUsuario2.nombre);
                let valorVelocidadAgilidad = structuredClone(Object.values(POKEMONS1)[iAgilidad].estadisticas.velocidad)
                let aumentoVelocidad = valorVelocidadAgilidad *= variar[contAgilidad]
                contAgilidad += 2;
                console.log(aumentoVelocidad);
                break;
            case "Descanso":
                if (pokemonUsuario1.estado == "Normal") {
                    let iDescanso = encontrarPosicion(pokemonUsuario1.nombre);
                    let valorVida = structuredClone(Object.values(POKEMONS1)[iDescanso].estadisticas.vida)
                    pokemonUsuario1.estadisticas.vida = valorVida;
                    pokemonUsuario1.estado = "Dormido";
                    break;
                }
                else if (pokemonUsuario1.estado == "Dormido") {
                    console.log("¡El pokemon ya se encuentra dormido!");
                    break;
                }
                break;
            case "Tóxico":
                let iToxico = encontrarPosicion(pokemonUsuario2.nombre);
                let dañoToxico = (contToxico * 6.25 * Object.values(POKEMONS1)[iToxico].estadisticas.vida) / 100;
                contToxico++;
                console.log("ID pokemon --> " + iToxico);
                console.log("Daño tóxico en el turno " + (contToxico - 1) + " --> " + dañoToxico);
                console.log("Contador de tóxico --> " + contToxico);
                break;
        }
    }
    else if (ataque.poder == 1) {
        switch (ataque.nombre) {
            case "Movimiento sísmico":
                pokemonUsuario2.estadisticas.vida -= 100;
                console.log(pokemonUsuario2.estadisticas.vida)
                break;
            case "Super diente":
                if (pokemonUsuario2.estadisticas.vida < 2) {
                    pokemonUsuario2.estadisticas.vida = 0;
                    console.log(pokemonUsuario2.estadisticas.vida)
                    break;
                }
                pokemonUsuario2.estadisticas.vida /= 2;
                console.log(pokemonUsuario2.estadisticas.vida)
                break;
        }
        console.log(pokemonsSeleccionados1, pokemonsSeleccionados2)
    }
    else if (ataque.inmunidad.includes(pokemonUsuario2.tipo)) {
        console.log("¡El pokémon es inmune!")
        daño = 0;

    }
    else {
        if (precision(ataque.precision)) {
            let daño = 0.01 *                                                      // 0.01
                (pokemonUsuario1.tipo.includes(ataque.tipo) ? 1.5 : 1) *            // B
                ((ataque.efectividad.includes(pokemonUsuario2.tipo)) ? 2 :                // E
                    (ataque.debilidad.includes(pokemonUsuario2.tipo)) ? 0.5 : 1) *        // E
                (Math.floor(Math.random() * (16) + 85)) *                          // V
                (
                    (21 * (ataque.tipoAtaque == "Físico" ?
                        pokemonUsuario1.estadisticas.ataque * ataque.poder :
                        pokemonUsuario1.estadisticas.ataqueEspecial * ataque.poder)) /
                    (25 * (ataque.tipoAtaque == "Físico" ?
                        pokemonUsuario2.estadisticas.defensa :
                        pokemonUsuario2.estadisticas.defensaEspecial)) + 2
                )
            pokemonsSeleccionados2[0].estadisticas.vida -= daño
            console.log(pokemonsSeleccionados2[0].estadisticas.vida)

        }
        console.log("Ataque fallido")

    }
    document.getElementById("0").innerHTML = pokemonUsuario2.estadisticas.vida;
    document.getElementById("1").innerHTML = pokemonUsuario1.ataques[0].nombre;
    document.getElementById("2").innerHTML = pokemonUsuario1.ataques[1].nombre;
    document.getElementById("3").innerHTML = pokemonUsuario1.ataques[2].nombre;
    document.getElementById("4").innerHTML = pokemonUsuario1.ataques[3].nombre;


}

function mostrar() {
    var textoOculto = document.getElementById("textoOculto");
    textoOculto.style.display = "none";
    inicial.style.display = "block";
    document.getElementById("botonInicial").style.display = "none";
}


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'M') {
        document.getElementById('hiddenContent').style.display = 'block';
        document.getElementById('mew1').checked = true;
    }
});
