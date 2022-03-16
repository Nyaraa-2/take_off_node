import Pool from 'pg-pool'
export const database = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'takeoff',
  password: '200316',
  port: 5432,
})
