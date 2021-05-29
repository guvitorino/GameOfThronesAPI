const schemaName = 'lords'

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
      .specificType('seasons', 'Text[]')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable(schemaName)
}
