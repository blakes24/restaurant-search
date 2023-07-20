import axios from "axios";

const BASE_URL = "https://api.yelp.com/v3/businesses";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer VNaZ_w0_ZwCQziflFrAgVbUF2rbTo00oZjg75STGM4ncQPd91uU66lt4n7W98N5-YlemzbnbpFoNQl8oAAzJ2rnutIwDfJk9ODKFEVLSW1g0BsR2t9x1AuH4oPeSYXYx",
  },
});
