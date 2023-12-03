import { useState } from "react";

export function ProductsIndex(props) {
  console.log(props);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="products-index" className="container text-center">
      <div className="header-all-products">
        <h1>All Products</h1>
        Search Products{" "}
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="names"
        />
        <datalist id="names">
          {props.products.map((product) => (
            <option key={product.id}>{product.name}</option>
          ))}
        </datalist>
      </div>
      <div className="row">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
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
