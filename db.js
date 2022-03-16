import Pool from 'pg-pool'
export const database = new Pool({
  user: 'enzoavlt',
  host: 'postgresql-enzoavlt.alwaysdata.net',
  database: 'enzoavlt_takeoff',
  password: 'takeoffbdd',
  port: 5432,
})
