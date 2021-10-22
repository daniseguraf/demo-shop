import express from  'express'
import dotenv from  'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.get('/', (req, res) => res.send(`API running on ${PORT}`))

app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
  const product = products.find(el => el._id === req.params.id)
  res.json(product)
})


app.listen(PORT, console.log(`Server running in ${ENVIROMENT} mode on ${PORT}`))
