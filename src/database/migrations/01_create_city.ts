import Knex from 'knex';

export async function up(knex: Knex) {
   return knex.schema.createTable('city', table => {
      table.increments('id').primary();

      table.integer('province_id')
         .notNullable()
         .references('id')
         .inTable('province');

      table.string('name').notNullable();
      table.string('code').notNullable();
   });
}

export async function down(knex: Knex) {
   return knex.schema.dropTable('city');
}
