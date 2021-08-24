exports.up = (knex) => {
   return knex.schema.createTable('province', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('code', 7).notNullable();
      table.string('capital').notNullable();
      table.string('language').notNullable();
      table.decimal('latitude', null).notNullable();
      table.decimal('longitude', null).notNullable();
      table.integer('area').notNullable();
   })
}

exports.down = (knex) => {
   return knex.schema.dropTable('province');
}