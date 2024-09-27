const Pokemon = require('../../models/Pokemon');

const getAllPokemon = async function() {
    try {
        const pokemons = await Pokemon.find({});

        return pokemons;
    } catch (error) {
        throw error;
    }
}

const getOnePokemon = async function(id) {
    try {
        const pokemon = await Pokemon.findById(id);
        if (!pokemon) {
            throw "404 - No pokemon found by that ID."
        }

        return pokemon;
    } catch (error) {
        throw error;
    }
}

const createPokemon = async function (pokemonData) {
    try {
        const pokemon = await Pokemon.create(pokemonData);

        return pokemon;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
}