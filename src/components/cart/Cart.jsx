// import styles from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import productsSlice from "../../redux/productsSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  // arguments (state=>{state.sliceName.InitialStateKeyOfWantedState})
  const products = useSelector((state) => state.products.productsCart);

  // To perform an Action
  const dispatch = useDispatch();

  return (
    <div>
      {products?.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
        </div>
      ))}
      <button
        onClick={() => {
          // arguments (sliceFileName.actions.functionName)
          dispatch(productsSlice.actions.emptyCart());
        }}
      >
        Empty Cart
      </button>
      <Link to="/">
        <button>Products</button>
      </Link>
    </div>
  );
};

export default Cart;
