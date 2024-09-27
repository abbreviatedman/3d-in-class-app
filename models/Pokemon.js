const mongoose = require('mongoose');

const pokemonsSchema = new mongoose.Schema({
    PokedexNo: {
        type: Number,
        required: true,
        unique: true,
    },

    Name: {
        type: String,
        required: true,
        unique: true,
    },

    Type: String,
    Moves: [String],
});

const Pokemon = mongoose.model('Pokemon', pokemonsSchema);

module.exports = Pokemon;