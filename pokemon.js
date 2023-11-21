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
            nombre: "Deslumbrar", tipo: "Normal", poder: 0, usosRestantes: 30, precision: 100,
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
            nombre: "Movimiento sísmimo", tipo: "Lucha", poder: 1, usosRestantes: 20, precision: 100,
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

var pikachu = {
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
};

var bulbasaur = {
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
};

var charmander = {
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
};

var squirtle = {
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
};

var pidgeotto = {
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
};

var rattata = {
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
};

var ekans = {
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
};

var jigglypuff = {
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
};

var meowth = {
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
};

var abra = {
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
};

var machop = {
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
};

var gastly = {
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
};

var diglett = {
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
};

var geodude = {
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
};

var scyther = {
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
};


let pokemonUsuario = [pikachu];
let pokemonIA = [squirtle];

let ataque1 = pokemonUsuario[0].ataques[1]



// ataque[1] --> rayo
// pokemonUsuario[0] --> Pikachu
// pokemonUsuario[0].tipo --> Eléctrico
// pokemonUsuario[0].tipo.includes(ataque1.tipo

let tipo_Ataque = ataque1.tipoAtaque

console.log(tipo_Ataque);

daño = 0.01 *                                                       // 0.01
        (pokemonUsuario[0].tipo.includes(ataque1.tipo) ? 1.5 : 1) *           // B
        ((ataque1.efectividad.includes(pokemonIA[0].tipo)) ? 2 :        // E
        (ataque1.debilidad.includes(pokemonIA[0].tipo)) ? 0.5 : 1) *    // E
        (Math.floor(Math.random() * (16) + 85)) *                   // V
        (
            (21 * pokemonUsuario[0].estadisticas.ataque * ataque1.poder) /
            (25 * pokemonIA[0].estadisticas.defensa) + 2
        )



console.log(pokemonIA)
console.log(daño)

function mostrar() {
    var textoOculto = document.getElementById("textoOculto");
    textoOculto.style.display = "none";
    inicial.style.display = "block";
    document.getElementById("botonInicial").style.display = "none";
}
