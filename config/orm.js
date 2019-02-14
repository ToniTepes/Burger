var connection = require("./connection.js");
var orm = {
    
    selectAll: function (tabelInput, cb) {
        connection.query("SELECT * FROM burger" + tabelInput + ';', function (err, result) {
            if(err) console.log(err);
            cb(result);
        });
    },

    update: function(tabelInput, condition, cb) {
        connection.query('UPDATE ' + tabelInput + ' SET devoured = true WHERE id=' + condition +
        ';', function(err, result) {
            if(err) console.log(err);
            cb(result);
        })
    },

    create: function(tabelInput, val, cb) {
        connection.query('INSERT INTO ' + tabelInput + ' (burger_name) VALUES (' + val + ');', function(err,result) {
            if(err) console.log(err);
            cb(result);
        })
    }

}


module.exports = orm;