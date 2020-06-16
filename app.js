const express = require ('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const notiRouter = require('./routes/notification');


require('dotenv').config();
const app = express();


const port = process.env.PORT || 3000;

// View engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
