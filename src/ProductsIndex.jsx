export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.url} />
          <p>Width: {product.width}</p>
          <p>Height: {product.height}</p>
        </div>
      ))}
    </div>
  );
}
