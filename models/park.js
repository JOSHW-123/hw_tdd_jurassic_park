const Dinosaur = require("./dinosaur");

const Park = function(name, ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection_of_dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function (){
    return this.collection_of_dinosaurs.length;
}

module.exports = Park;