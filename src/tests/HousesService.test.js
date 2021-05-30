const { GenericContainer } = require('testcontainers')
const fs = require('fs')

const service = require('../services/HousesService')

jest.setTimeout(20000)

describe('HousesService', () => {
  let pgContainer
  let knex

  beforeAll(async () => {
    pgContainer = await new GenericContainer('postgres')
      .withEnv('POSTGRES_USER', 'test')
      .withEnv('POSTGRES_PASSWORD', 'test')
      .withEnv('POSTGRES_DB', 'postgres')
      .withExposedPorts(5432)
      .start()

    const PG_IP = pgContainer.getIpAddress(pgContainer.getNetworkNames()[0])

    const data = JSON.stringify({ PG_IP })
    fs.writeFileSync('test-db.json', data)

    knex = require('../database/Connection')

    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await knex.migrate.latest()
    return knex.seed.run()
  })

  afterAll(async () => {
    await knex.destroy()
    return pgContainer.stop()
  })

  describe('House Save', () => {
    test('If return correct object', async () => {
      const house = await service.save(
        {
          name: 'teste',
          region: 'North',
          foundation_year: '200 A.C',
          current_lord: '8d39ab4d-53b5-4736-b87e-06ec76477903'
        }
      )

      expect(house).toBeInstanceOf(Array)
      expect(house[0]).toHaveProperty('id')
      expect(house[0]).toHaveProperty('name')
      expect(house[0]).toHaveProperty('region')
      expect(house[0]).toHaveProperty('current_lord')
    })
  })

  describe('House List', () => {
    test('If list correct', async () => {
      await service.save(
        {
          name: 'teste2',
          region: 'North',
          foundation_year: '200 A.C',
          current_lord: '8d39ab4d-53b5-4736-b87e-06ec76477903'
        }
      )

      const result = await service.list()

      expect(result).toBeInstanceOf(Array)
      expect(result.length).toBe(2)
    })
  })

  describe('House Seach', () => {
    test('If Search By name correct', async () => {
      const result = await service.search('teste2', undefined)

      expect(result).toBeInstanceOf(Object)

      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('region')
      expect(result).toHaveProperty('current_lord')

      expect(result.name).toBe('teste2')
      expect(result.region).toBe('North')
      expect(result.current_lord).toBe('8d39ab4d-53b5-4736-b87e-06ec76477903')
      expect(result.foundation_year).toBe('200 A.C')
    })

    test('If Search By ID correct', async () => {
      const list = await service.list()
      const result = await service.search(undefined, list[0].id)

      expect(result).toBeInstanceOf(Object)

      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('region')
      expect(result).toHaveProperty('current_lord')

      expect(result.name).toBe(list[0].name)
      expect(result.region).toBe(list[0].region)
      expect(result.current_lord).toBe(list[0].current_lord)
      expect(result.foundation_year).toBe(list[0].foundation_year)
    })
  })

  describe('House Delete', () => {
    test('If Delete correct', async () => {
      const list = await service.list()
      await service.delete(list[0].id)

      const result = await service.search(undefined, list[0].id)

      expect(result).toBe(undefined)
    })
  })
})
