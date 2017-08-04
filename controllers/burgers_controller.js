var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

//get route for root, get all burgers
router.get("/", function(req, res){
  db.Burger.findAll({
    order: [
      ["buger_name", "ASC"]
    ]
  }).then(
    function(dbBurger) {
      var bObject = {
        burger: dbBurger
      };
      console.log(bObject);
       return res.render("index", bObject);
    });
  });

//post route for root, adds burger to database from name input field
router.post("/", function(req, res){
  //console.log(req.body.name);

db.Burger.create({
  burger_name: req.body.burger_name
}).then(
  function(dbBurger) {
    console.log(dbBurger);

    res.redirect("/");
  });
});

//take in burger id as a required parameter
router.put("/:id", function(req, res){
  //console.log(req.params.id);
  dbBurger.update({
    devoured: true
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
