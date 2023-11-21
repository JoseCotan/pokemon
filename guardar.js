

let pokemonUsuario = [pikachu];
let pokemonIA = [squirtle];

let ataque1 = pokemonUsuario[0].ataques[1]



// ataque[1] --> rayo
// pokemonUsuario[0] --> Pikachu
// pokemonUsuario[0].tipo --> Eléctrico
// pokemonUsuario[0].tipo.includes(ataque1.tipo

let tipo_Ataque = ataque1.tipoAtaque

// console.log(pokemonUsuario[0].estadisticas.ataque * ataque1.poder);


function atacar(pokemonUsuario1, pokemonUsuario2, tipoAtaque, numAtaque) {
    let ataque = pokemonUsuario1.ataques[numAtaque];
    let pokemonIA = pokemonUsuario2;
    let daño = 0.01 *                                                        // 0.01
        (pokemonUsuario1.tipo.includes(ataque.tipo) ? 1.5 : 1) *            // B
        ((ataque.efectividad.includes(pokemonIA.tipo)) ? 2 :                // E
            (ataque.debilidad.includes(pokemonIA.tipo)) ? 0.5 : 1) *        // E
        (Math.floor(Math.random() * (16) + 85)) *                          // V
        (
            (21 * (ataque.tipoAtaque === "Físico" ?
                pokemonUsuario1.estadisticas.ataque * ataque.poder :
                pokemonUsuario1.estadisticas.ataqueEspecial * ataque.poder)) /
            (25 * (ataque.tipoAtaque === "Físico" ?
                pokemonIA.estadisticas.defensa :
                pokemonIA.estadisticas.defensaEspecial)) + 2
        );

    console.log(pokemonUsuario1, pokemonUsuario2, tipoAtaque, numAtaque);
}


atacar(pokemons.pikachu, pokemons.squirtle, pokemons.pikachu.ataques[1].tipoAtaque, 2)


daño = 0.01 *                                                       // 0.01
    (pokemonUsuario[0].tipo.includes(ataque1.tipo) ? 1.5 : 1) *           // B
    ((ataque1.efectividad.includes(pokemonIA[0].tipo)) ? 2 :        // E
        (ataque1.debilidad.includes(pokemonIA[0].tipo)) ? 0.5 : 1) *    // E
    (Math.floor(Math.random() * (16) + 85)) *                   // V
    (
        (21 * (ataque1.tipoAtaque == "Físico" ?
            pokemonUsuario[0].estadisticas.ataque * ataque1.poder :
            pokemonUsuario[0].estadisticas.ataqueEspecial * ataque1.poder)) /
        (25 * (ataque1.tipoAtaque == "Físico" ?
            pokemonIA[0].estadisticas.defensa :
            pokemonIA[0].estadisticas.defensaEspecial)) + 2
    )



//console.log(pokemonUsuario[0].estadisticas.ataqueEspecial * ataque1.poder)
//console.log(daño)

function mostrar() {
    var textoOculto = document.getElementById("textoOculto");
    textoOculto.style.display = "none";
    inicial.style.display = "block";
    document.getElementById("botonInicial").style.display = "none";
}



daño = 0.01 *                                                       // 0.01
    (pokemonUsuario[0].tipo.includes(ataque1.tipo) ? 1.5 : 1) *           // B
    ((ataque1.efectividad.includes(pokemonIA[0].tipo)) ? 2 :        // E
        (ataque1.debilidad.includes(pokemonIA[0].tipo)) ? 0.5 : 1) *    // E
    (Math.floor(Math.random() * (16) + 85)) *                   // V
    (
        (21 * (ataque1.tipoAtaque == "Físico" ?
            pokemonUsuario[0].estadisticas.ataque * ataque1.poder :
            pokemonUsuario[0].estadisticas.ataqueEspecial * ataque1.poder)) /
        (25 * (ataque1.tipoAtaque == "Físico" ?
            pokemonIA[0].estadisticas.defensa :
            pokemonIA[0].estadisticas.defensaEspecial)) + 2
    )



//console.log(pokemonUsuario[0].estadisticas.ataqueEspecial * ataque1.poder)
console.log(21 * (ataque1.tipoAtaque == "Físico" ?
pokemonUsuario[0].estadisticas.ataque * ataque1.poder :
pokemonUsuario[0].estadisticas.ataqueEspecial * ataque1.poder))
console.log()
