var PartyBus = require("./partyBus.js");

var zbtPartyBus = new PartyBus("Cosmo", "NYC", "Beersville, CA");

console.log("duuuuudes?", zbtPartyBus.duds);

zbtPartyBus.addDud("female", "Moon", 10);

console.log("duuudes?", zbtPartyBus.duds);

zbtPartyBus.addDud("male", "Breaker", 10);
zbtPartyBus.addDud("female", "Babe", 9);
zbtPartyBus.addDud("male", "Homer", 11);

console.log("duudes?", zbtPartyBus.duds);