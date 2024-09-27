const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const viewRouter = require('./routes/client/viewRouter');
const pokemonsRouter = require('./routes/api/pokemonsRouter');
const connectToMongoDb = require('./database/mongodb');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // handling JSON in the req.body
app.use(express.urlencoded({extended: false})); // handling form data in the req.body
app.use(methodOverride('_method')); //> allows you to override the GET/POST requests in forms to DELETE or PUT or PATCH

app.use('/', viewRouter);
app.use('/api/pokemons', pokemonsRouter);

const PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server is listening on port: ${PORT}`);
    connectToMongoDb();
});