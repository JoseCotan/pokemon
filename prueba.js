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


var ataques = {
    gruñido: [
        {
            nombre: "Gruñido", tipo: "Normal", poder: 0, usosRestantes: 40, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    cabezazo: [
        {
            nombre: "Cabezazo", tipo: "Normal", poder: 130, usosRestantes: 10, precision: 100,
            dobleTurno: 2, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    ataqueRapido: [
        {
            nombre: "Ataque Rápido", tipo: "Normal", poder: 40, usosRestantes: 30, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    hiperRayo: [
        {
            nombre: "Hiper rayo", tipo: "Normal", poder: 150, usosRestantes: 5, precision: 90,
            dobleTurno: 1, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    superDiente: [
        {
            nombre: "Super diente", tipo: "Normal", poder: 1, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
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
            inmunidad: INMUNIDAD.normal, efectoSecundario: "Paralizar", porcentajeEfecto: 30
        },
    ],
    megaPatada: [
        {
            nombre: "Mega patada", tipo: "Normal", poder: 120, usosRestantes: 5, precision: 75,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    cuchillada: [
        {
            nombre: "Cuchillada", tipo: "Normal", poder: 70, usosRestantes: 20, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    dobleFilo: [
        {
            nombre: "Doble filo", tipo: "Normal", poder: 120, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal, efectoSecundario: "Retroceso", porcentajeEfecto: 25
        },
    ],
    megaPunyo: [
        {
            nombre: "Mega puño", tipo: "Normal", poder: 80, usosRestantes: 20, precision: 85,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        }
    ],
    explosion: [
        {
            nombre: "Explosión", tipo: "Normal", poder: 250, usosRestantes: 5, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    deslumbrar: [
        {
            nombre: "Deslumbrar", tipo: "Normal", poder: 0, usosRestantes: 30, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.normal, debilidad: DEBILIDAD.normal,
            inmunidad: INMUNIDAD.normal
        },
    ],
    surf: [
        {
            nombre: "Surf", tipo: "Agua", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.agua, debilidad: DEBILIDAD.agua,
            inmunidad: INMUNIDAD.agua
        },
    ],
    hidroBomba: [
        {
            nombre: "Hidro bomba", tipo: "Agua", poder: 110, usosRestantes: 5, precision: 80,
            dobleTurno: 0, efectividad: EFECTIVIDAD.agua, debilidad: DEBILIDAD.agua,
            inmunidad: INMUNIDAD.agua
        }
    ],
    somnifero: [
        {
            nombre: "Somnífero", tipo: "Planta", poder: 0, usosRestantes: 15, precision: 80,
            dobleTurno: 0, efectividad: EFECTIVIDAD.planta, debilidad: DEBILIDAD.planta,
            inmunidad: INMUNIDAD.planta
        },
    ],
    rayoSolar: [
        {
            nombre: "Rayo Solar", tipo: "Planta", poder: 120, usosRestantes: 10, precision: 100,
            dobleTurno: 2, efectividad: EFECTIVIDAD.planta, debilidad: DEBILIDAD.planta,
            inmunidad: INMUNIDAD.planta
        }
    ],
    lanzallamas: [
        {
            nombre: "Lanzallamas", tipo: "Fuego", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.fuego, debilidad: DEBILIDAD.fuego,
            inmunidad: INMUNIDAD.fuego, efectoSecundario: "Quemar", porcentajeEfecto: 10
        }
    ],
    ondaTrueno: [
        {
            nombre: "Onda trueno", tipo: "Eléctrico", poder: 95, usosRestantes: 20, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.electrico, debilidad: DEBILIDAD.electrico,
            inmunidad: INMUNIDAD.electrico
        },
    ],
    ataqueAereo: [
        {
            nombre: "Ataque aéreo", tipo: "Volador", poder: 140, usosRestantes: 5, precision: 90,
            dobleTurno: 2, efectividad: EFECTIVIDAD.volador, debilidad: DEBILIDAD.volador,
            inmunidad: INMUNIDAD.volador
        },
    ],
    rayo: [
        {
            nombre: "Rayo", tipo: "Eléctrico", poder: 90, usosRestantes: 15, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.electrico, debilidad: DEBILIDAD.electrico,
            inmunidad: INMUNIDAD.electrico, efectoSecundario: "Paralizar", porcentajeEfecto: 10
        },
    ],
    movimientoSismico: [
        {
            nombre: "Movimiento sísmimo", tipo: "Lucha", poder: 1, usosRestantes: 20, precision: 100,
            dobleTurno: 0,
        }
    ],
    terremoto: [
        {
            nombre: "Terremoto", tipo: "Tierra", poder: 100, usosRestantes: 10, precision: 100,
            dobleTurno: 0, efectividad: EFECTIVIDAD.tierra, debilidad: DEBILIDAD.tierra,
            inmunidad: INMUNIDAD.tierra
        }
    ],
    avalancha: [
        {
            nombre: "Avalancha", tipo: "Roca", poder: 75, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.roca, debilidad: DEBILIDAD.roca,
            inmunidad: INMUNIDAD.roca
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
            inmunidad: INMUNIDAD.psiquico
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
            inmunidad: INMUNIDAD.psiquico
        },
    ],
    ventisca: [
        {
            nombre: "Ventisca", tipo: "Hielo", poder: 110, usosRestantes: 5, precision: 70,
            dobleTurno: 0, efectividad: EFECTIVIDAD.hielo, debilidad: DEBILIDAD.hielo,
            inmunidad: INMUNIDAD.hielo
        },
    ],
    toxico: [
        {
            nombre: "Tóxico", tipo: "Veneno", poder: 0, usosRestantes: 10, precision: 90,
            dobleTurno: 0, efectividad: EFECTIVIDAD.veneno, debilidad: DEBILIDAD.veneno,
            inmunidad: INMUNIDAD.veneno
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
        velocidad: 203
    }
};

var pidgey = {
    nombre: "Pidgey",
    tipo: ["Normal", "Volador"],
    estado: "Normal",
    ataques: [
        ...ataques.agilidad,
        ...ataques.dobleFilo,
        ...ataques.ataqueAereo,
        ...ataques.ataqueRapido,
    ],
    estadisticas: {
        vida: 284,
        ataque: 207,
        defensa: 196,
        velocidad: 232
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
        ataque: 196,
        defensa: 163,
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
        ataque: 261,
        defensa: 201,
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
        ataque: 205,
        defensa: 175,
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
        ataque: 219,
        defensa: 169,
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
        ataque: 258,
        defensa: 291,
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
        ataque: 301,
        defensa: 284,
        velocidad: 339
    }
};
