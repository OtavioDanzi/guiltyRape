export async function up(knex) {
  return knex.schema.createTable('victims', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('rapist').notNullable();
    table.string('city').notNullable();
    table.string('description').notNullable();
  })
}

export async function down(knex) {
  return knex.schema.dropTable('victims');
}
