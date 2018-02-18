// common js modules syntax
const express = require('express');
const app = express();

// route handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' })
});

// dynamically get port
const PORT = process.env.PORT || 5000;
app.listen(PORT);