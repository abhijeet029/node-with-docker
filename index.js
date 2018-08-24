var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

var port = 4100;
app.listen(port, (req, res) => {
    console.log(`app running in port ${port}`);
});
