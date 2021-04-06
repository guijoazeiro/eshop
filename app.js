const express = require('express')
const app = express()
const morgan = require('morgan')


require('dotenv/config')

app.use(express.json())
app.use(morgan('tiny'))

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) =>{
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'url.jpg'
    }
    res.send(product)
})

app.post(`${api}/products`, (req, res) =>{
    const newProduct = req.body
    console.log(newProduct)
    res.send(newProduct)
})

app.listen(3000, ()=>{
    console.log(api)
    console.log('server is running on http://localhost:3000')
})