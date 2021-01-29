import axios from "axios";

export default axios.create({
  baseURL: "https://books-7d21.restdb.io/rest",
  headers: {
    'cache-control': 'no-cache',
    'x-apikey': '5fdf7479ff9d67063814078b',
    'content-type': 'application/json'
  },
})