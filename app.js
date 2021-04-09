const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors());
app.options('*', cors())

require('dotenv/config')

const productsRouter = require('./routers/products')
const categoryRouter = require('./routers/categories')
app.use(express.json())
app.use(morgan('tiny'))

const api = process.env.API_URL

app.use(`${api}/products`, productsRouter)
app.use(`${api}/category`, categoryRouter)

mongoose.connect(process.env.URI_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connection is ready....')
    })
    .catch((err) => {
        console.error(err)
    })

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})