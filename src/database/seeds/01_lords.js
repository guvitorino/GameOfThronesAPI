
exports.seed = function (knex) {
  const table = 'lords'

  return knex(table).del()
    .then(function () {
      return knex(table).insert([
        {
          id: '8d39ab4d-53b5-4736-b87e-06ec76477903',
          name: 'Jon Snow',
          seasons: ['Season 1',
            'Season 2',
            'Season 3',
            'Season 4',
            'Season 5',
            'Season 6']
        }
      ])
    })
}
