import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.savePokemonToDB(140);
console.log(charmander)
