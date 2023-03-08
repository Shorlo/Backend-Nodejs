const express = require('express');
const app = express();
const morgan = require('morgan');

// Configurations
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// Starting server, listening...
app.listen(app.get('port'), () =>
{
     console.log(`Server listening on port ${app.get('port')}`);
});
