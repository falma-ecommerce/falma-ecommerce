import express from "express";
import axios from "axios";
import data from './data.js'
const app = express();
app.use(express.json());


app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(`The server is listening on port ${port}... 🐒`)
);