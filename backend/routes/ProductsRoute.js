import express from "express";
import axios from "axios";

const router = express.Router();

router.get(
  "/",
  async (req, res) => {
    const params = {
      store: "ROE",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      country: "CZ",
      sort: "freshness",
      currency: "EUR",
      sizeSchema: "UK",
      lang: "en-GB",
      q: req.query.q,
    };

    const myProductsOptions = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      await axios.request(myProductsOptions).then(function (response) {
        res.json(response.data);
      });
    } catch (error) {
      console.error({ message: "Products api error", error: error });
    }
  },
  // []
);
export default router;
