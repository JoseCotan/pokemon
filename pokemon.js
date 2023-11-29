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

const COLORES_ESTADOS = {

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
        },
        imagen: 'imagenes/pikachu.png'
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
        },
        imagen: 'imagenes/bulbasaur.png'
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
        },
        imagen: 'imagenes/charmander.png'
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
        },
        imagen: 'imagenes/vamo a calmarno.png'
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
        },
        imagen: 'imagenes/pidgeotto.png'
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
        },
        imagen: 'imagenes/rattata.png'
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
        },
        imagen: 'imagenes/ekans.png'
    },
    jigglypuff: {
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
        },
        imagen: 'imagenes/jigglypuff.png'
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
        },
        imagen: 'imagenes/abra.png'
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
        },
        imagen: 'imagenes/meowth.png'
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
        },
        imagen: 'imagenes/machop.png'
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
        },
        imagen: 'imagenes/gastly.png'
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
        },
        imagen: 'imagenes/diglett.png'
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
        },
        imagen: 'imagenes/geodude.png'
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
        },
        imagen: 'imagenes/scyther.png'
    },
}

// ----- Recogida de datos

//document.getElementById('botonAtacar').addEventListener('click', function () {
//    var ataqueSeleccionado = document.getElementById('ataques1').value;
//    atacar(pokemonsSeleccionados1[0], pokemonsSeleccionados2[0], ataqueSeleccionado, 0);
//});

var botonEmpezar = document.getElementById('empezar');
var combates = document.getElementById('combates');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menu3 = document.getElementById('menu3');
var pantalla = document.getElementById('pantalla');
var pokemonsSeleccionados1 = [];
var pokemonsSeleccionados2 = [];
var pokemonInicial1 = 0;
var pokemonInicial2 = 0;
var pokemonActual1 = 0;
var pokemonActual2 = 0;
var jugadorActual = 1;
var iAtaque = 1;
var contGruñido = 0;
var contAgilidad = 1;
var contToxico = 1;
var variar = [1.5, 2, 2.5, 3, 3.5, 4];
const POKEMONS1 = structuredClone(pokemons);
const POKEMONS2 = structuredClone(pokemons);
var pokemonsEstadisticasJugador1;
var pokemonsEstadisticasJugador2;
var valorJugador1;
var valorJugador2;

botonEmpezar.style.display = 'none';
combates.style.display = 'none';
menu1.style.display = 'none';
menu2.style.display = 'none';
menu3.style.display = 'none';


document.getElementById('mostrarValores').addEventListener('click', function () {
    var valoresMostrados = document.getElementById('valoresMostrados');

    valoresMostrados.innerHTML = "";

    valoresMostrados.innerHTML += "Pokémons seleccionados jugador 1:<br>";
    pokemonsSeleccionados1.forEach(function (pokemon, index) {
        valoresMostrados.innerHTML += `<strong>${pokemon.nombre}</strong> --> Opción ${index + 1}<br>`;
    });

    valoresMostrados.innerHTML += "<br>";
    valoresMostrados.innerHTML += "Pokémons seleccionados jugador 2:<br>";
    pokemonsSeleccionados2.forEach(function (pokemon, index) {
        valoresMostrados.innerHTML += `<strong>${pokemon.nombre}</strong> --> Opción ${index + 1}<br>`;
    });

    if (pokemonsSeleccionados1.length === 3 && pokemonsSeleccionados2.length === 3) {
        valoresMostrados.innerHTML += "<button id='seleccionarIniciales' onclick='inicial()'>Seleccionar Pokémon inicial</button>";
    }
});

function inicial() {
    var valoresMostrados = document.getElementById('valoresMostrados');
    if (jugadorActual === 1) {
        document.getElementById('mostrarValores').remove()
        valoresMostrados.innerHTML = `Selecciona el Pokémon del jugador ${jugadorActual}: <input type="password" id='seleccion'>`;
        valoresMostrados.innerHTML += "<button id='seleccionarIniciales' onclick='inicial()'>Seleccionar Pokémon inicial</button>";
        document.getElementById('seleccion').style.display = 'block';
        document.getElementById('seleccion').setAttribute('oninput', 'guardarPokemonInicial(1)');
        jugadorActual++;
    } else if (jugadorActual === 2) {
        valoresMostrados.innerHTML = `Selecciona el Pokémon del jugador ${jugadorActual}: <input type="password" id='seleccion'>`;
        valoresMostrados.innerHTML += "<button id='seleccionarIniciales' onclick='inicial()'>Seleccionar Pokémon inicial</button>";
        document.getElementById('seleccion').style.display = 'block';
        document.getElementById('seleccion').setAttribute('oninput', 'guardarPokemonInicial(2)');
        jugadorActual++;
    } else {
        valoresMostrados.innerHTML = `El jugador 1 empieza usando a ${pokemonsSeleccionados1[pokemonInicial1].nombre}`;
        valoresMostrados.innerHTML += `<br>El jugador 2 empieza usando a ${pokemonsSeleccionados2[pokemonInicial2].nombre}`;
        botonEmpezar.style.display = 'inline-block';
        pokemonsEstadisticasJugador1 = structuredClone(pokemonsSeleccionados1);
        pokemonsEstadisticasJugador2 = structuredClone(pokemonsSeleccionados2);
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


function actualizarPokemonsSeleccionados1() {
    pokemonsSeleccionados1 = [];
    const checkboxes = document.querySelectorAll('input[name="pokemonJugador1"]:checked');

    checkboxes.forEach(checkbox => {
        pokemonsSeleccionados1.push(Object.values(POKEMONS1)[checkbox.value]);
    });
}

function actualizarPokemonsSeleccionados2() {
    pokemonsSeleccionados2 = [];
    const checkboxes = document.querySelectorAll('input[name="pokemonJugador2"]:checked');

    checkboxes.forEach(checkbox => {
        pokemonsSeleccionados2.push(Object.values(POKEMONS2)[checkbox.value]);
    });
}

function limitarSeleccion(fieldset, actualizarFuncion) {
    const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
    const limite = 3;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const marcadas = fieldset.querySelectorAll('input[type="checkbox"]:checked');

            if (marcadas.length > limite) {
                checkbox.checked = false;
            }
            actualizarFuncion();
        });
    });
}

const fieldset1 = document.querySelector('fieldset:nth-of-type(1)');
const fieldset2 = document.querySelector('fieldset:nth-of-type(2)');

limitarSeleccion(fieldset1, actualizarPokemonsSeleccionados1);
limitarSeleccion(fieldset2, actualizarPokemonsSeleccionados2);

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
    checkbox.addEventListener('change', actualizarPokemonsSeleccionados1);
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarPokemonsSeleccionados2);
});

document.getElementById('empezar').addEventListener('click', function () {
    combates.style.display = 'flex';
    menu1.style.display = 'flex';
    menu2.style.display = 'flex';
    menu3.style.display = 'flex';
    pantalla.innerHTML = 'Turno del Jugador 1'
    document.getElementById('inicial').innerHTML = '';

    mostrarVida();
    mostrarEstado();
    mostrarAtaques();
    mostrarPokemonsRestantes();
    mostrarImagenes();
});


function mostrarEstado() {
    var estadoPokemon1 = document.getElementById("estadoPokemon1");

    if (comprobarParalizado1()) {
        estadoPokemon1.innerHTML = `Estado actual: <span style="color: yellow;">
                ${pokemonsSeleccionados1[pokemonActual1].estado}</span>.`;
    } else if (pokemonsSeleccionados1[pokemonActual1].estado === "Dormido") {
        estadoPokemon1.innerHTML = `Estado actual:<span style="color: cyan;">
                ${pokemonsSeleccionados1[pokemonActual1].estado}</span>.`;
    } else if (pokemonsSeleccionados1[pokemonActual1].estado === "Envenenado") {
        estadoPokemon1.innerHTML = `Estado actual:<span style="color: purple;">
                ${pokemonsSeleccionados1[pokemonActual1].estado}</span>.`;
    } else if (pokemonsSeleccionados1[pokemonActual1].estado === "Debilitado") {
        estadoPokemon1.innerHTML = `Estado actual:<span style="color: dimgray;">
                ${pokemonsSeleccionados1[pokemonActual1].estado}</span>.`;
    } else {
        estadoPokemon1.innerHTML = `Estado actual:
        ${pokemonsSeleccionados1[pokemonActual1].estado}.`;
    }

    var estadoPokemon2 = document.getElementById("estadoPokemon2");
    if (comprobarParalizado2()) {
        estadoPokemon2.innerHTML = `Estado actual:<span style="color: yellow;">
                            ${pokemonsSeleccionados2[pokemonActual2].estado}</span>.`;
    } else if (pokemonsSeleccionados2[pokemonActual2].estado === "Dormido") {
        estadoPokemon2.innerHTML = `Estado actual:<span style="color: cyan;">
                ${pokemonsSeleccionados2[pokemonActual2].estado}</span>.`;
    } else if (pokemonsSeleccionados2[pokemonActual2].estado === "Envenenado") {
        estadoPokemon2.innerHTML = `Estado actual:<span style="color: purple;">
                        ${pokemonsSeleccionados2[pokemonActual2].estado}</span>.`;
    } else if (pokemonsSeleccionados2[pokemonActual2].estado === "Debilitado") {
        estadoPokemon2.innerHTML = `Estado actual:<span style="color: dimgray;">
                ${pokemonsSeleccionados2[pokemonActual2].estado}</span>.`;
    } else {
        estadoPokemon2.innerHTML = `Estado actual:
                ${pokemonsSeleccionados2[pokemonActual2].estado}.`;
    }
}

function comprobarParalizado1() {
    return pokemonsSeleccionados1[pokemonActual1].estado === "Paralizado";
}

function comprobarParalizado2() {
    return pokemonsSeleccionados2[pokemonActual2].estado === "Paralizado";
}

function mostrarAtaques() {
    listaAtaques(pokemonsSeleccionados1[pokemonActual1]);
    listaAtaques(pokemonsSeleccionados2[pokemonActual2]);
}

function mostrarVida() {
    if (pokemonsSeleccionados1[pokemonActual1].estadisticas.vida <= 0) {
        pokemonsSeleccionados1[pokemonActual1].estadisticas.vida = 0;
    } else if (pokemonsSeleccionados2[pokemonActual2].estadisticas.vida <= 0) {
        pokemonsSeleccionados2[pokemonActual2].estadisticas.vida = 0;
    }
    var vida1 = document.getElementById("vida1");
    var vida2 = document.getElementById("vida2");
    var numeroVida1 = document.getElementById("numeroVida1");
    var numeroVida2 = document.getElementById("numeroVida2");
    console.log(pokemons)
    var anchoBarra = (pokemonsSeleccionados1[pokemonActual1].estadisticas.vida / pokemonsEstadisticasJugador1[pokemonActual1].estadisticas.vida) * 100;
    vida1.style.width = anchoBarra + '%';

    numeroVida1.innerText = Math.trunc(pokemonsSeleccionados1[pokemonActual1].estadisticas.vida);

    var anchoBarra = (pokemonsSeleccionados2[pokemonActual2].estadisticas.vida / pokemonsEstadisticasJugador2[pokemonActual2].estadisticas.vida) * 100;
    vida2.style.width = anchoBarra + '%';

    numeroVida2.innerText = Math.trunc(pokemonsSeleccionados2[pokemonActual2].estadisticas.vida);
}

function mostrarPokemonsRestantes() {
    var pokemonsRestantes1 = document.getElementById("pokemonsRestantes1");
    var pokemonsRestantes2 = document.getElementById("pokemonsRestantes2");
    pokemonsRestantes1.innerHTML = '';
    for (let i = 0; i < pokemonsSeleccionados1.length; i++) {
        pokemonsRestantes1.innerHTML += `<span style="${ponerEstiloColor(pokemonsSeleccionados1[i])}">
                ${pokemonsSeleccionados1[i].nombre} -- Vida restante:
                ${Math.trunc(pokemonsSeleccionados1[i].estadisticas.vida)} -- Estado:
                ${pokemonsSeleccionados1[i].estado} -- Número:
                ${i + 5}</span><br>`;
    }

    pokemonsRestantes2.innerHTML = '';
    for (let i = 0; i < pokemonsSeleccionados2.length; i++) {
        pokemonsRestantes2.innerHTML += `<span style="${ponerEstiloColor(pokemonsSeleccionados2[i])}">
                ${pokemonsSeleccionados2[i].nombre} -- Vida restante:
                ${Math.trunc(pokemonsSeleccionados2[i].estadisticas.vida)} -- Estado:
                ${pokemonsSeleccionados2[i].estado} -- Número:
                ${i + 5}</span><br>`;

    }
}

function ponerEstiloColor(pokemon) {
    if (pokemon.estado === "Paralizado") {
        return "color: yellow;";
    } else if (pokemon.estado === "Dormido") {
        return "color: cyan;";
    } else if (pokemon.estado === "Envenenado") {
        return "color: purple;";
    } else if (pokemon.estado === "Debilitado") {
        return "color: dimgray;";
    } else {
        return "";
    }
}

function eliminarImagenes() {
    var contenedorImagen1 = document.getElementById('pokemonImagen1');
    var contenedorImagen2 = document.getElementById('pokemonImagen2');
    contenedorImagen1.removeChild(contenedorImagen1.firstChild);
    contenedorImagen2.removeChild(contenedorImagen2.firstChild);
}

function mostrarImagenes() {
    var contenedorImagen1 = document.getElementById('pokemonImagen1');
    var contenedorImagen2 = document.getElementById('pokemonImagen2');
    var imagenPokemon1 = document.createElement('img');
    var imagenPokemon2 = document.createElement('img');
    imagenPokemon1.src = pokemonsSeleccionados1[pokemonActual1].imagen;
    contenedorImagen1.appendChild(imagenPokemon1);
    imagenPokemon2.src = pokemonsSeleccionados2[pokemonActual2].imagen;
    contenedorImagen2.appendChild(imagenPokemon2);
}

function listaAtaques(pokemon) {
    document.getElementById(`ataques${iAtaque}`).innerHTML = '';
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


function precision(valor) {
    return valor > (Math.floor(Math.random() * 101));
}

function fallido() {
    pantalla.innerHTML = "¡El ataque ha fallado!";
}

var contAccion = 1;
var jugador1HaAtacado = false;
var jugador2HaAtacado = false;
var pokemonDebilitado1 = false;
var pokemonDebilitado2 = false;

function compararVelocidad(pokemon1, pokemon2) {
    return pokemon1.estadisticas.velocidad > pokemon2.estadisticas.velocidad;
}

document.getElementById('hacerAccion').addEventListener('click', function () {
    if (contAccion == -1) {
        if (pokemonDebilitado1) {
            pantalla.innerHTML = `Jugador 1 --> Selecciona el nuevo pokemon.`;
            contAccion = 0;
            return;
        } else if (pokemonDebilitado2) {
            pantalla.innerHTML = `Jugador 2 --> Selecciona el nuevo pokemon.`;
            contAccion = 0;
            return;
        }
    }

    if (contAccion == 0) {
        let condicion1 = false;
        let condicion2 = false;
        console.log(pokemonDebilitado1)
        console.log(pokemonDebilitado2)
        let nuevoPokemonIndex = parseInt(document.getElementById('accion').value);
        if ((nuevoPokemonIndex == 5 || nuevoPokemonIndex == 6 || nuevoPokemonIndex == 7)
            && pokemonsSeleccionados1[nuevoPokemonIndex - 5].estado != "Debilitado"
            && pokemonDebilitado1) {
            alert("hola, pokemon debilitado es 1")
            pokemonActual1 = nuevoPokemonIndex - 5;
            eliminarImagenes();
            mostrarImagenes();
            mostrarEstado();
            mostrarAtaques();
            mostrarVida();
            mostrarPokemonsRestantes();
            pokemonDebilitado1 = false;
        } else {
            console.error("Índice de nuevo Pokémon no válido");
            condicion1 = true;
        }

        if ((nuevoPokemonIndex == 5 || nuevoPokemonIndex == 6 || nuevoPokemonIndex == 7)
            && pokemonsSeleccionados2[nuevoPokemonIndex - 5].estado != "Debilitado"
            && pokemonDebilitado2) {
            alert("hola, pokemon debilitado es 2")
            pokemonActual2 = nuevoPokemonIndex - 5;
            eliminarImagenes();
            mostrarImagenes();
            mostrarEstado();
            mostrarAtaques();
            mostrarVida();
            mostrarPokemonsRestantes();
            pokemonDebilitado2 = false;
        } else {
            console.error("Índice de nuevo Pokémon no válido");
            condicion2 = true;
        }
        if (condicion1 && condicion2) {
            return;
        }
    }

    if (contAccion == 1) {
        var valorJugador1Input = document.getElementById('accion')
        valorJugador1 = document.getElementById('accion').value - 1;
        console.log(valorJugador1)
        if (isNaN(valorJugador1) || parseInt(valorJugador1) < 0 || parseInt(valorJugador1) > 6) {
            valorJugador1Input.value = '';
            pantalla.innerHTML = "Introduce un número correcto."
            return;
        }
        valorJugador1Input.value = ''
        pantalla.innerHTML = "Turno del Jugador 2";
        contAccion++
        return;
    } else if (contAccion == 2) {
        var valorJugador2Input = document.getElementById('accion')
        valorJugador2 = document.getElementById('accion').value - 1;
        console.log(valorJugador2)
        if (isNaN(valorJugador2) || parseInt(valorJugador2) < 0 || parseInt(valorJugador2) > 6) {
            valorJugador2Input.value = '';
            pantalla.innerHTML = "Introduce un número correcto."
            return;
        }
        valorJugador2Input.value = ''
        contAccion++
    }
    if (valorJugador1 >= 4 && valorJugador1 <= 7) {
        pokemonActual1 = valorJugador1 - 4;
        eliminarImagenes();
        mostrarImagenes();
        mostrarEstado();
        mostrarAtaques();
        mostrarVida();
        mostrarPokemonsRestantes();
        console.log("entra");
        pantalla.innerHTML = `El jugador 1 cambió a ${pokemonsSeleccionados1[pokemonActual1].nombre}`
        valorJugador1 = 0;
        jugador1HaAtacado = true;
        return;
    }
    if (valorJugador2 >= 4 && valorJugador2 <= 7) {
        pokemonActual2 = valorJugador2 - 4;
        eliminarImagenes();
        mostrarImagenes();
        mostrarEstado();
        mostrarAtaques();
        mostrarVida();
        mostrarPokemonsRestantes();
        console.log("entra");
        pantalla.innerHTML = `El jugador 2 cambió a ${pokemonsSeleccionados2[pokemonActual2].nombre}`
        valorJugador2 = 0;
        jugador2HaAtacado = true;
        return
    }
    if (compararVelocidad(pokemonsSeleccionados1[pokemonActual1], pokemonsSeleccionados2[pokemonActual2]) && !jugador1HaAtacado) {
        pantalla.innerHTML = `El Pokémon ${pokemonsSeleccionados1[pokemonActual1].nombre} del Jugador 1
                                ha usado ${pokemonsSeleccionados1[pokemonActual1].ataques[valorJugador1].nombre}<br>`
        atacar(pokemonsSeleccionados1[pokemonActual1], pokemonsSeleccionados2[pokemonActual2],
            valorJugador1, 1);
        console.log("El jugador 1 acaba de atacar, siendo más rápido que el jugador 2")
        jugador1HaAtacado = true;
        return;
    } else if (compararVelocidad(pokemonsSeleccionados2[pokemonActual2], pokemonsSeleccionados1[pokemonActual1]) && !jugador2HaAtacado) {
        pantalla.innerHTML = `El Pokémon ${pokemonsSeleccionados2[pokemonActual2].nombre} del Jugador 2
                                ha usado ${pokemonsSeleccionados2[pokemonActual2].ataques[valorJugador2].nombre}<br>`
        atacar(pokemonsSeleccionados2[pokemonActual2], pokemonsSeleccionados1[pokemonActual1],
            valorJugador2, 2);
        console.log("El jugador 2 acaba de atacar, siendo más rápido que el jugador 1")
        jugador2HaAtacado = true;
        return;
    } else if (!jugador1HaAtacado) {
        pantalla.innerHTML = `El Pokémon ${pokemonsSeleccionados1[pokemonActual1].nombre} del Jugador 1
                                ha usado ${pokemonsSeleccionados1[pokemonActual1].ataques[valorJugador1].nombre}<br>`
        atacar(pokemonsSeleccionados1[pokemonActual1], pokemonsSeleccionados2[pokemonActual2],
            valorJugador1, 1);
        console.log("El jugador 1 acaba de atacar, siendo menos rápido que el jugador 2")
        jugador1HaAtacado = true;
        return;
    } else if (!jugador2HaAtacado) {
        pantalla.innerHTML = `El Pokémon ${pokemonsSeleccionados2[pokemonActual2].nombre} del Jugador 2
                                ha usado ${pokemonsSeleccionados2[pokemonActual2].ataques[valorJugador2].nombre}<br>`
        atacar(pokemonsSeleccionados2[pokemonActual2], pokemonsSeleccionados1[pokemonActual1],
            valorJugador2, 2);
        console.log("El jugador 2 acaba de atacar, siendo menos rápido que el jugador 1")
        jugador2HaAtacado = true;
        return;
    }

    jugador1HaAtacado = jugador2HaAtacado = false;
    contAccion = 1;
    pantalla.innerHTML = "Turno del Jugador 1";

    console.log(valorJugador1)

});


function esTipoEfectivo(tipoAtaque, tipoPokemon) {
    for (let i = 0; i < tipoAtaque.length; i++) {
        if (tipoPokemon.includes(tipoAtaque[i])) {
            return true;
        }
    }
    return false;
}


function atacar(pokemonUsuario1, pokemonUsuario2, idAtaque, idJugador) {
    let daño = 0;
    let ataque = pokemonUsuario1.ataques[idAtaque];
    console.log(ataque.tipo)
    console.log(pokemonUsuario2.tipo)
    console.log(esTipoEfectivo(pokemonUsuario2.tipo, ataque.tipo))

    if (ataque.poder == 0) {
        switch (ataque.nombre) {
            case "Gruñido":
                let iGruñido = encontrarPosicion(pokemonUsuario2.nombre);
                let valorAtaqueGruñido = structuredClone(Object.values(POKEMONS1)[iGruñido].estadisticas.ataque)
                pokemonUsuario2.estadisticas.ataque = valorAtaqueGruñido /= variar[contGruñido]
                contGruñido++;
                console.log("---");
                console.log(pokemonsEstadisticasJugador2[0].estadisticas.ataque);
                pantalla.innerHTML += `¡El Ataque de
                                ${pokemonUsuario2.nombre} ha sido reducido!`
                break;
            case "Canto":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} ya se encuentra dormido!`
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} se ha dormido!`
                        break;
                    }
                }
                fallido();
                break;
            case "Somnífero":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} ya se encuentra dormido!`
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} se ha dormido!`
                        break;
                    }
                }
                fallido();
                break;
            case "Hipnosis":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Dormido") {
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} ya se encuentra dormido!`
                        break
                    } else {
                        pokemonUsuario2.estado = "Dormido";
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} se ha dormido!`
                        break;
                    }
                }
                fallido();
                break;
            case "Deslumbrar":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Paralizado") {
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} ya se encuentra paralizado!`
                        break
                    } else {
                        pokemonUsuario2.estado = "Paralizado";
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} se ha paralizado!`
                        break;
                    }
                }
                fallido();
                break;
            case "Onda trueno":
                if (precision(ataque.precision)) {
                    if (pokemonUsuario2.estado == "Paralizado") {
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} ya se encuentra paralizado!`
                        break
                    } else {
                        pokemonUsuario2.estado = "Paralizado";
                        pantalla.innerHTML += `¡El pokémon
                        ${pokemonUsuario2.nombre} se ha paralizado!`
                        break;
                    }
                }
                fallido();
                break;
            case "Agilidad":
                let iAgilidad = encontrarPosicion(pokemonUsuario1.nombre);
                let valorVelocidadAgilidad = structuredClone(Object.values(POKEMONS1)[iAgilidad].estadisticas.velocidad)
                pokemonUsuario1.estadisticas.velocidad = valorVelocidadAgilidad *= 1.5
                contAgilidad += 2;
                pantalla.innerHTML = pokemonUsuario1.estadisticas.velocidad;
                break;
            case "Descanso":
                if (pokemonUsuario1.estado == "Dormido") {
                    pantalla.innerHTML += `¡El pokémon
                    ${pokemonUsuario1.nombre} ya se encuentra dormido!`
                    break
                } else {
                    pokemonUsuario1.estado = "Dormido";
                    pantalla.innerHTML += `¡El pokémon
                    ${pokemonUsuario1.nombre} se ha dormido!`
                    break;
                }
            case "Tóxico":
                let iToxico = encontrarPosicion(pokemonUsuario2.nombre);
                let dañoToxico = (1.5 * 6.25 * Object.values(POKEMONS1)[iToxico].estadisticas.vida) / 100;
                //contToxico++;
                if (pokemonUsuario2.estado == "Envenenado") {
                    pantalla.innerHTML += `¡El pokémon
                    ${pokemonUsuario2.nombre} ya se encuentra envenenado!`
                    break
                } else {
                    pokemonUsuario2.estado = "Envenenado";
                    pantalla.innerHTML += `¡El pokémon
                    ${pokemonUsuario2.nombre} se ha envenenado!`
                    break;
                }

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
    else if (pokemonUsuario2.tipo.includes(ataque.inmunidad[0])) {
        pantalla.innerHTML += "¡El pokémon es inmune!";
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
            pokemonUsuario2.estadisticas.vida -= daño
        } else {
            fallido();
        }
    }

    if (pokemonUsuario1.estadisticas.vida <= 0 || pokemonUsuario2.estadisticas.vida <= 0) {
        if (idJugador === 1) {
            pantalla.innerHTML = `El pokémon ${pokemonUsuario2.nombre} se ha debilitado<br>`;
            pokemonUsuario2.estado = "Debilitado";
            contAccion = -1;
            pokemonDebilitado2 = true;
            jugador1HaAtacado = true;
            jugador2HaAtacado = true;
            //if (idJugador === 1) {
            //    pantalla.innerHTML += `Jugador 1 --> Selecciona el nuevo Pokémon.`;
            //} else {
            //    pantalla.innerHTML += `Jugador 2 --> Selecciona el nuevo Pokémon.`;
            //}
        } else {
            pantalla.innerHTML = `El pokémon ${pokemonUsuario2.nombre} se ha debilitado<br>`;
            pokemonUsuario2.estado = "Debilitado";
            contAccion = -1;
            pokemonDebilitado1 = true;
            jugador1HaAtacado = true;
            jugador2HaAtacado = true;
            //if (idJugador === 1) {
            //   pantalla.innerHTML += `Jugador 2 --> Selecciona el nuevo Pokémon.`;
            //} else {
            //    pantalla.innerHTML += `Jugador 1 --> Selecciona el nuevo Pokémon.`;
            //}
        }

    }
    mostrarEstado();
    mostrarVida();
    mostrarPokemonsRestantes();
}

function mostrar() {
    var textoOculto = document.getElementById("textoOculto");
    textoOculto.style.display = "none";
    inicial.style.display = "block";
    document.getElementById("botonInicial").style.display = "none";
}
