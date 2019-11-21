const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(express.static('public'));
app.get('/catinfo', (req, res) => {
    const cat = {
        'name': 'Frank',
        'age': 6,
        'weight': 5,
    };
    res.json(cat);
});
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});