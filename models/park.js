const Dinosaur = require("./dinosaur");

const Park = function(name, ticket_price, collection_of_dinosaurs){
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection_of_dinosaurs = collection_of_dinosaurs;
}


module.exports = Park