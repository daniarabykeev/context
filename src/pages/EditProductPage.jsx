import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../contexts/ProductsContext";

const init = {
  title: "",
  price: "",
};

function EditProductPage() {
  const { getOneProduct, oneProduct, editProduct } =
    useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(init);

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

  function handleSubmit(e) {
    e.preventDefault();
    editProduct(id, product);
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
        <button>edit</button>
      </form>
    </div>
  );
}

export default EditProductPage;
