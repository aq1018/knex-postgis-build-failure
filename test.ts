import knex from 'knex'
import knexPostgis from 'knex-postgis'

const db = knex(process.env.DATABASE_URL)
const st = knexPostgis(db)

console.log(st)