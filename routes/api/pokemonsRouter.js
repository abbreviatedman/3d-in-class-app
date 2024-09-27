const express = require('express');

const {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
} = require('../../controllers/api/pokemonsController');
const makeResponse = require('./utilities');

const router = express.Router();

router.get('/', async function (req, res) {
    try {
        const pokemons = await getAllPokemon();
        res.status(200).json(makeResponse(pokemons));
    } catch (error) {
        const failureResponse = makeResponse(error, 'failure getting all pokemons');
        res.status(500).json(failureResponse);
        console.log(failureResponse);
    }
})

router.get('/:id', async function (req, res) {
    try {
        const pokemon = await getOnePokemon(req.params.id);
        res.status(200).json(makeResponse(pokemon));
    } catch (error) {
        const failureResponse = makeResponse(error, 'failure getting one pokemon');
        res.status(500).json(failureResponse);
        console.log(failureResponse);
    }
})

router.post('/', async function (req, res) {
    try {
        console.log(req.body)
        const pokemon = await createPokemon(req.body);
        res.status(200).json(makeResponse(pokemon));
    } catch(error) {
        const failureResponse = makeResponse(error, 'failure creating pokemon');
        res.status(500).json(failureResponse);
        console.log(failureResponse);
    }
})

module.exports = router;
