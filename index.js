const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, resp) => {
    resp.render('index')
});

app.listen(3000, () => console.log('Online'));
