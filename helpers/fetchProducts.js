// const fetch = require("node-fetch");

const fetchProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  try {
const response = await fetch(url);
const data = await response.json();
return data;
  } catch (error) {
return error;
  }

  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
