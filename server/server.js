const express = require('express');
const PORT = process.env.PORT || 1331;
var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        name: 'varun',
        loc: 'NJ'
    });
});

app.get('/users', (req, res) => {
    var users = [{
        name: 'Varun',
        age: 28
    }, {
        name: 'Arun',
        age: 31
    }];

    res.status(200).send(users);
});

app.listen(PORT);

module.exports.app = app;