const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50, [] );
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur('B-Rex')
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur('B-Rex');
    park.addDinosaur('C-Rex');
    park.removeDinosaurByName('C-Rex');
    const expected = ['B-Rex'];
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
