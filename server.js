const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//DB configs
//Getting access to the database
const db = require('./config/keys').mongoURI;

//Connect to MongoDB thru mongoose
mongoose.connect(db).then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));