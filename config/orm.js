var connection = require("../config/connection.js");
var orm = {
    
    selectAll: function (cb) {
        connection.query("SELECT * FROM burger", function (err,data) {
            if (err) cb(err, null);
            cb(null, data);
        });
    }

};

module.exports = orm;