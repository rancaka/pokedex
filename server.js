var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {hello: 'Hello World!'});
});

app.listen(3000, () => {
    console.log(__dirname);
    console.log('Running on port 3000');
});