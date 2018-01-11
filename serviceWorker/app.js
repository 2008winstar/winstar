/**
 * @file file description here.
 * @author winstar
 * @date 2017/12/19
 */
let express = require('express');
let path = require('path');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', (req, res) => {
    res.render('index1.ejs');
});

app.set('port', process.env.PORT || 8000);
app.listen(8000);