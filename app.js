import express from 'express'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from Take_Off API')
})

app.listen(port, () => console.log(`App take off listen on port ${port}`))
