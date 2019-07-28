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
    res.end("Post Successfully: \n" + JSON.stringify(newHero));
  };
   
  exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(heros));
    res.end("All Heros: \n" + JSON.stringify(heros));  
  };
   
  exports.find = function(req, res) {
    var id = parseInt(req.params.id);
    var hero = {};
    
    heros.find((e,i) => {
        if(e.id == id) hero = e;
    });

    console.log("--->Find hero: \n" + JSON.stringify(hero));
    res.end( "Found your Hero:\n" + JSON.stringify(hero));
  };
   
  exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updatedHero = req.body;
    updatedHero.id = id; 

    heros.find((e, i, hero) => {
        if(e.id == id) hero[i] = updatedHero;

        console.log("--->Update Successfully, heros: \n" + JSON.stringify(heros));
        // return
        res.end("Update Successfully! \n" + JSON.stringify(updatedHero));
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
    res.end( "Hero has been removed: \n" + JSON.stringify(deletedHero));
  };