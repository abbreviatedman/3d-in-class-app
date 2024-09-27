const express = require('express');

const {
    getAllPokemon,
    getOnePokemon,
    createPokemon,
    deletePokemon,
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

router.get('/create-pokemon', function (req, res) {
    res.render('create-pokemon');
})

router.post('/create-pokemon-action', async function (req, res) {
    // get the pokemon from the request body (populated by the browser when they submit the form)
    const pokemon = req.body; //> {Name: 'colin', Moves: 'grow, poison, jump'}
    console.log(pokemon);
    // change the Moves to be an array (it's a string from the input box)
    pokemon.Moves = pokemon.Moves.split(', ');
    try {
        // create the pokemon in the database
        const newPokemon = await createPokemon(pokemon);
        // redirect the user to the page for their new pokemon
        res.render('pokemon', {pokemon: newPokemon});
    } catch (error) {
        console.log(error);
        res.send('Error creating pokemon.');
    }
})

router.get('/confirm-deletion/:id', async function (req, res) {
    try {
        const pokemon = await getOnePokemon(req.params.id);
        res.render("confirm-deletion", {pokemon});
    } catch (error) {
        console.log(error);
        res.send("Error confirming pokemon deletion.");
    }
})

router.delete('/pokemon/:id', async function (req, res) {
    try {
        await deletePokemon(req.params.id);
        res.redirect('/pokemons');
    } catch (error) {
        console.log(error);
        res.send("Error deleting pokemon.");
    }
})

router.get('/update-pokemon-form/:id', async function (req, res) {
    try {
        const pokemon = await getOnePokemon(req.params.id);
        res.render('update-pokemon-form', {pokemon});
    } catch (error) {
        console.log(error);
        res.send('Error updating pokemon.')
    }
})

module.exports = router;