/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex("livros").del()
    .then(function() {
      return knex("livros").insert([
        {
          titulo: "Web Desing Responsivo", 
          autor: "Maurício",
          ano: 2014,
          preco: 119.9,
          foto: "./seeds/design.png"
        },
        {
          titulo: "Inteligência Artificial", 
          autor: "Lucas",
          ano: 2016,
          preco: 159.9,
          foto: "./seeds/inteligencia_artificial.jpg"
        },
        {
          titulo: "Prevenção", 
          autor: "Fernandes",
          ano: 2014,
          preco: 119.9,
          foto: "./seeds/prevenca.jpg"
        }
      ]);
  });
};
