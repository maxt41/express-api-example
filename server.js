const express = require('express')
const cors = require('cors')    

const app = express()

app.use(cors())
app.options('*', cors())

app.use('/hello', require('./routes/hello'))

app.listen(1000, () => {console.log('http://localhost:1000')})