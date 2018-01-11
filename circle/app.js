let express = require('express');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let config = require('./webpack.config');
let compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use('/', express.static(path.join(__dirname, 'public')));

let api = require('./routes/api');
app.use('/api', api);

app.get('/', (req, res) => {
    res.render('index');
});

app.set('host', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 8000);
let server = app.listen(app.get('port'), app.get('host'), () => {
    console.log('Express server listening on port', server.address().port);
});