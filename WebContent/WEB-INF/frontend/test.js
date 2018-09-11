const axios = require('axios');

const data = axios.create({
  baseURL: "http://localhost:8080/hal_shop/API/"
});

function get(){
  data.get('Product').then(function (response){ console.log(response.status)});
}

get()