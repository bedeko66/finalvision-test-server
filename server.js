const config = require('config');
const express = require('express');
const compression = require('compression');
const logger = require('./logger');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express(); 
const apiRouter = require('./api/index');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(compression());
app.use(helmet());

// Config
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}
app.use(logger);

app.use('/', apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Server started on port ${ port }`) })



