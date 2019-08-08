const heros = [
    {
      id: 1,
      fullname: "awim",
      gender: "Male",
      address: "Ciganjur",
      powers: ["Programmer", "Software Engineer"],
      city: "Jakarta",
      country: "Indonesia"
    }
];

exports.create = function(req, res) {
    var newHero = req.body;
    newHero.id = heros.length + 1;
    heros.push(newHero);
    console.log("--->After Post, heros:\n" + JSON.stringify(heros));
    newHero.status = "New hero is added";
    res.send(newHero);
    res.end();
  };
   
  exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(heros));
    res.send(heros);
    res.end();
  };
   
  exports.find = function(req, res) {
    var id = parseInt(req.params.id);
    var hero = {};
    
    heros.find((e,i) => {
        if(e.id == id) hero = e;
    });

    console.log("--->Find hero: \n" + JSON.stringify(hero));
    res.send(hero);
    res.end();
  };
   
  exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedHero = req.body;
    updatedHero.id = id; 

    heros.find((e, i, hero) => {
        if(e.id == id) hero[i] = updatedHero;

        console.log("--->Update Successfully, heros: \n" + JSON.stringify(heros));
        // return
        res.send(updatedHero);
        res.end();
    });

    res.end("Hero Unavailable:\n:" + JSON.stringify(updatedHero));
  };
   
  exports.delete = function(req, res) {
    id = parseInt(req.params.id);
    var deletedHero = {}
    heros.find((e, i, hero) => {
        if(e.id == id) {
            deletedHero = e;
            hero.splice(i,1);
        } 
    });

    console.log("--->After deletion, hero list:\n" + JSON.stringify(heros) );
    res.send(deletedHero);
    res.end();
  };