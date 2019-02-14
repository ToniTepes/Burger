require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require('express-handlebars');
var routes = require('./controllers/burger_controller.js');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.listen(PORT, function() {
    console.log('Server is listening at PORT' + PORT);
});
