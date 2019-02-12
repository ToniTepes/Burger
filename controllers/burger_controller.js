var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render('index', hbsObject);
    });
});

router.post("/burger", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});
router.put('/burger', function(res,req) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);

    burger.updateOne(condition, function(result) {
        if (result.changeRows == 0) {
            return res.statusCode(404).end();
        } else {
            Response.status(200).end();
        }
    });
});

module.export = router;