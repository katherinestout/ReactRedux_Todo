const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

//Routes
const lists = require('./routes/api/lists');
const newlist = require('./routes/api/newlist');

//DB configs
//Getting access to the database
const db = require('./config/keys').mongoURI;

//Connect to MongoDB thru mongoose
mongoose.connect(db).then(() => console.log('MongoDB Connected!'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

//use routes
app.use('/api/lists', lists);
app.use('/api/newlist', newlist);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));