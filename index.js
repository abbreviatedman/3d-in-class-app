const express = require('express');
const path = require('path');

const viewRouter = require('./routes/client/viewRouter');
const pokemonsRouter = require('./routes/api/pokemonsRouter');
const connectToMongoDb = require('./database/mongodb');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', viewRouter);
app.use('/api/pokemons', pokemonsRouter);

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is listening on port: ${PORT}`);
    connectToMongoDb();
});