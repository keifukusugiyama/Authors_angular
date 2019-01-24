//use models AuthorSchema
const Author = require("./models");

//export to routes.js
module.exports = {

    //get /authors 
    all: (req, res) => {
        //retrieve all the Authors
        Author.find({})
            //if successful, respond with json file of result
            .then(results => res.json(results))
            //if there's error, respond with json file of error
            .catch(err => res.json(err))
    },

    //get /authors/id 
    perId: (req, res) =>{
        //find Author with id provided on the route
        Author.findById(req.params.id)
        //if successful, respond with json file of result
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //post /authors 
    new:(req, res)=>{
        //create new Author with returned json file on body
        Author.create(req.body)
        //if successful, respond with json file with newly created Author
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //put /authors/:id 
    update:(req, res)=>{
        //find Author by id given on the route, update with json file on body
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        //if successful, respond with json file with the updating Author
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //delete /authors/:id 
    delete:(req, res)=>{
        //find Author by id given on the route, delete it
        Author.findByIdAndDelete(req.params.id)
        //if successful, respond with json file with the deleted Author
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    }

}