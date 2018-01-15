const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.send('Hello Time!');
});

const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});