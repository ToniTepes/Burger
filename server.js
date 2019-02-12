require('dotenv').config();

var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");

//app.use(routes);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.listen(PORT, function() {
    console.log('Server is listening at PORT' + PORT);
});
