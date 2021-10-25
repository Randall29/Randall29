const pokemon1 = {
  name: "Squartle",
  type: "water",
  attack: 10,
  defense: 10,
};

const pokemon2 = {
  name: "Tricko",
  type: "grass",
  attack: 10,
  defense: 10,
};

let damage = function (pokemonAtack, pokemonDefense) {
  const criticDamage = 2;
  const neutralDamage = 1;
  const nonEfectiveDamage = 0.5;

  let effectiveness;
  let damage;

  switch (pokemonAtack.type) {
    case "fire":
      if (pokemonDefense.type === "grass") {
        effectiveness = criticDamage;
      } else if (pokemonDefense.type === "water") {
        effectiveness = nonEfectiveDamage;
      } else {
        effectiveness = neutralDamage;
      }
      break;
    case "water":
      if (pokemonDefense.type === "fire") {
        effectiveness = criticDamage;
      } else if (pokemonDefense.type === "water") {
        effectiveness = nonEfectiveDamage;
      } else {
        effectiveness = neutralDamage;
      }
      break;
    case "grass":
      if (pokemonDefense.type === "fire") {
        effectiveness = nonEfectiveDamage;
      } else if (pokemonDefense.type === "water") {
        effectiveness = criticDamage;
      } else {
        effectiveness = neutralDamage;
      }
      break;
    case "electric":
      if (pokemonDefense.type === "water") {
        effectiveness = criticDamage;
      } else if (pokemonDefense.type === "grass") {
        effectiveness = nonEfectiveDamage;
      } else {
        effectiveness = neutralDamage;
      }
  }

  damage = 50 * (pokemonAtack.attack / pokemonDefense.defense) * effectiveness;
  console.log(damage);
  return damage;
};

damage(pokemon1, pokemon2);
