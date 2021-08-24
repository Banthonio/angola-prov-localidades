import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('district', table => {
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

export async function down(knex: Knex) {
   return knex.schema.dropTable('district');
}