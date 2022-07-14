import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get( "/:id", (req, res) => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v3/detail",
        params: {
          id: req.params.id,
          lang: "en-US",
          store: "US",
          sizeSchema: "US",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },

      };
  
      try {
        axios.request(options).then(function (response) {
          res.json(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    },
    []
  );
  export default router;