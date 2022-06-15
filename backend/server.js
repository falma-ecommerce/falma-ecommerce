import express from "express";
import axios from "axios";
import data from './data.js'
const app = express();
app.use(express.json());

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v3/detail',
  params: {id: '9851612', lang: 'en-US', store: 'US', sizeSchema: 'US', currency: 'USD'},
  headers: {
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
    'X-RapidAPI-Key': 'd8619d8c30mshd90d561a87bd52bp1e5406jsn038635ae051c'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

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