const schemaName = 'houses'

exports.up = function (knex) {
  return knex.schema.createTable(schemaName, (table) => {
    table
      .uuid('id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))

    table
      .string('name', 60)
      .notNullable()

    table
      .string('region', 60)
      .notNullable()

    table
      .string('foundation_year', 60)
      .notNullable()

    table
      .uuid('current_lord')
      .notNullable()

    table.foreign('current_lord').references('id').inTable('lords')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable(schemaName)
}
