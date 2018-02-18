// common js modules syntax
const express = require('express');
const app = express();

// route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

// tell node to listen on port 5000
app.listen(5000);