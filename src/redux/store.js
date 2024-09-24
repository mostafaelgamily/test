// Step 2 // Only performed once for all the slices, but every new slice we add it to the configure story

import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    // key (sliceName of the wanted slice) : value (theImportedSliceFileName.reducer)
    products: productsSlice.reducer,
  },
});

export default store;
