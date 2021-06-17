export function fetchProducts() {
  return axios.get(`/products/${currentId}`)
      .then((response) => {
        updateProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
};
