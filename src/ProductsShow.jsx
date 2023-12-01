export function ProductsShow(props) {
  return (
    <div>
      <h2>Product Information</h2>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <p>Supplier: {props.product.supplier.name}</p>
    </div>
  );
}
