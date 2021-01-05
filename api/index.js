const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/contacts');
const { user, pass, dbname } = require('./sensitive');

const MONGODB_URL = `mongodb+srv://${user}:${pass}@cluster0.ptfkc.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(_ => console.log("DB connected"))
.catch(error => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(cors());

// listen POST new contact
app.post('/api/contact', (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }).save((err, response) => {
        if(err)
            return res.status(400).send(err);
        res.status(200).send(response);
    });
});

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Server listening on ${port}`); 