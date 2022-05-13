const productDetails = (primeiro, segundo) => [
    {
      name: primeiro,
      details: {
        productId: `${primeiro}123`,
      },
    },
    {
      name: segundo,
      details: {
        productId: `${segundo}123`,
      },
    },
  ];
  console.table(productDetails('alcool gel','Máscara'))
  module.exports = productDetails;