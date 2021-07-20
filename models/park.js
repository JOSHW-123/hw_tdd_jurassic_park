const Dinosaur = require("./dinosaur");

const Park = function(name, ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.collection_of_dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function (){
    return this.collection_of_dinosaurs.length;
}

Park.prototype.addDinosaur = function (dinosaur){
    this.collection_of_dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaurByName = function (dinosaur){
    const indexOfDinosaurs = this.collection_of_dinosaurs.indexOf(dinosaur);
    this.collection_of_dinosaurs.splice(indexOfDinosaurs, 1)

}


module.exports = Park;