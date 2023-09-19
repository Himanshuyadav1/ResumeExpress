const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// Importing route
const route = require('./routes/router');
// Importing path module
const path = require('path');


// Setting view engine to ejs
app.set('view engine', 'ejs');

// Setting static files
app.use(express.static(path.join(process.cwd(), 'public')));

//Using router for different route
app.use('/', route);

//Listening the server
app.listen(port, () => {
    console.log(`Your server is running at http://localhost:${port}`);
})