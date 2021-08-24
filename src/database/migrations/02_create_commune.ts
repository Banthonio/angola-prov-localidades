exports.up = (knex) => {
   return knex.schema.createTable('commune', table => {
      table.increments('id').primary();

      table.integer('province_id')
         .notNullable()
         .references('id')
         .inTable('province');

      table.integer('city_id')
         .notNullable()
         .references('id')
         .inTable('city');

      table.string('name').notNullable();
   });
}

exports.down = (knex) => {
   return knex.schema.dropTable('commune')
}