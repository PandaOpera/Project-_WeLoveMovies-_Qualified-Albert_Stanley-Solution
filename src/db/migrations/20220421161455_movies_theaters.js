
exports.up = function(knex) {
  return knex.schema.createTable("movies_theaters", (table) =>{
      table.foreign("movie_id")
      .inTable("movies")
      table.foreign("theater_id")
      .inTable("theaters")
      .onDelete("cascade")
      table.boolean("is_showing")
      table.timeStamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies_theaters");
};
