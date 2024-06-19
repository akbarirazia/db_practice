require("dotenv").config()

const { Client } = require("pg")

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL")
    return client.query("SELECT name FROM names")
  })
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(row.name)
    })
  })

  .catch((err) => console.error("Connection error", err.stack))
