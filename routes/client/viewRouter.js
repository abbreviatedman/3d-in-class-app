const express = require('express');

const {
    getAllPokemon,
    getOnePokemon,
} = require('../../controllers/api/pokemonsController');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
})

router.get('/pokemons', async function (req, res) {
    try {
        const pokemons = await getAllPokemon();
        res.render('pokemons', {pokemons})
    } catch (error) {
        console.log('error rendering pokemons page');
        console.log(error);
        res.send('404, pokemons not found');
    }
})

router.get('/pokemon/:id', async function (req, res) {
    try {
        const pokemon = await getOnePokemon(req.params.id);
        res.render('pokemon', {pokemon});
    } catch (error) {
        console.log('error rendering pokemon page');
        console.log(error);
        res.send('404, pokemon not found');
    }
})

module.exports = router;