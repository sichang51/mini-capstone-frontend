export function ProductsIndex(props) {
  console.log(props);
  return (
    <div id="products-index" className="container text-center">
      <div className="header-all-products">
        <h1>All Products</h1>
      </div>
      <div className="row">
        {props.products.map((product) => (
          <div key={product.id} className="products col-lg-4 col-md-6 col-12 my-3">
            <img className="product_image" src={product.images[0].url} width={250} height={350} alt="" />
            <h2>{product.name}</h2>
            <h4>Price: ${parseFloat(product.price).toFixed(2)}</h4>
            <p>Description: {product.description}</p>
            <button className="btn btn-primary" onClick={() => props.onShowProduct(product)}>
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
