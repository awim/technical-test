module.exports =  function(app){
    var hero = require('./controllers/hero.controller.js');
 
    // Create a new Hero
    app.post('/api/hero', hero.create);
 
    // Retrieve all Hero
    app.get('/api/hero', hero.findAll);
 
    // Retrieve a single Hero by Id
    app.get('/api/hero/:id', hero.find);

    // Update a Hero with Id
    app.put('/api/hero/:id', hero.update);
 
    // Delete a Hero with Id
    app.delete('/api/hero/:id', hero.delete);
}