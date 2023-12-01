export function ProductsIndex(props) {
  console.log(props);
  return (
    <div className="container">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <img className="product_image" src={product.images[0].url} width={250} height={350} alt="" />
          <h2>{product.name}</h2>
          <h4>Price: {product.price}</h4>
          <p>Description: {product.description}</p>
          <button onClick={() => props.onShowProduct(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
