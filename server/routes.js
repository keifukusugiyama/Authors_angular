//to use controller file
const controller = require("./controller");
const path = require("path");


//export for server.js
module.exports = function(app){
    //call on methods from controller for each route
    app
    .get('/api/authors', controller.all)
    //show id
    .get('/api/authors/:id', controller.perId)
    //create new
    .post('/api/authors', controller.new)
    //update for id
    .put ('/api/authors/:id', controller.update)
    //delete id
    .delete ('/api/authors/:id', controller.delete)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}