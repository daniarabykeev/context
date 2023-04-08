import React, { useContext, useState } from "react";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

const init = {
  title: "",
  price: "",
};

function AddProductPage() {
  const { addProduct } = useContext(productsContext);
  const [product, setProduct] = useState(init);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addProduct(product);
    setProduct(init);
    navigate("/");
  }

  function handleChange(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          value={product.title}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddProductPage;
