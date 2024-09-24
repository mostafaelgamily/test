import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import productsSlice from "../redux/productsSlice";

const Products = () => {
  const [products, setProducts] = useState([]);

  // To perform an Action
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <>
      <h3>Script Test</h3>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <div className={styles.cardsContainer}>
        {products.map((prod) => (
          <div className={styles.card} key={prod.id}>
            <Link to={`/products/${prod.id}`} key={prod.id}>
              <img src={prod.image} alt="product" />
            </Link>

            <div className={styles.cardDescription}>
              <h4>{prod.title}</h4>

              <p>${prod.price}</p>
              <button
                onClick={() => {
                  // arguments (sliceFileName.actions.functionName)
                  dispatch(productsSlice.actions.addToCart(prod));
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
