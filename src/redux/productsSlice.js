// Step 1 (for every operation slice)

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productsCart: [],
};

const productsSlice = createSlice({
  // Name of the Slice
  name: "products",

  // State (Content) of the Slice
  initialState,

  // Funtions of the Slice
  // Named reducers as it takes two values and returns one value (a new state)
  // Parameters "names are constants": (state which is the initalstate, action which is the passed value)
  reducers: {
    addToCart: (state, action) => {
      // to use the passed argument we use action.payload
      state.productsCart.push(action.payload);
    },
    emptyCart: (state) => {
      state.productsCart = [];
    },
  },
});

export default productsSlice;

///// To perform an Action /////
// const dispatch = useDispatch();
//
{
  /* <
  onClick={() => {
    // arguments (sliceFileName.actions.functionName)
    dispatch(productsSlice.actions.addToCart(prod));
  }}
> */
}

///// To Retrieve the data /////
//// arguments (state=>{state.sliceName.InitialStateKeyOfWantedState})
// const products = useSelector((state) => state.products.productsCart);
