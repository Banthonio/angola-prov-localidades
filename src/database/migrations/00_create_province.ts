import Knex from 'knex'
// Knex, capitual because is the types

export async function up(knex: Knex) {
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

export async function down(knex: Knex) {
   return knex.schema.dropTable('province');
}