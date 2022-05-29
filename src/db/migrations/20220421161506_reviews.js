
exports.up = function(knex) {
  return knex.schema.createTable("reviews", (table) => {
      table.increments("review_id")
  })
};

exports.down = function(knex) {
  
};
