import React, { createContext, useContext, useEffect, useState } from "react";

const QueryContext = createContext();

import { ref, onValue } from "firebase/database";
import { db } from "../firebase-config";

export const useQuery = () => {
  return useContext(QueryContext);
};
export default function QueryProvider({ children }) {
  // initial products state
  const [products, setProducts] = useState([]);
  // get all products from firebase
  const productRef = ref(db, "products/");

  // initial categories state
  const [categories, setCategories] = useState([]);
  // get all categories from firebase
  const categoryRef = ref(db, "categories/");

  const [categoriesProducts, setCategoriesProducts] = useState([]);

  const categoriesProductsRef = ref(db, "categoriesProducts/");
  useEffect(() => {
    onValue(productRef, (snapshot) => {
      setProducts([]);

      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).forEach((product) => {
          setProducts((oldArray) => [...oldArray, product]);
        });
      }
    });

    onValue(categoryRef, (snapshot) => {
      setCategories([]);

      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).forEach((category) => {
          setCategories((oldArray) => [...oldArray, category]);
        });
      }
    });

    onValue(categoriesProductsRef, (snapshot) => {
      setCategoriesProducts([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).forEach((category) => {
          setCategoriesProducts((oldArray) => [...oldArray, category]);
        });
      }
    });
  }, []);

  const value = {
    products,
    categories,
    categoriesProducts,
  };
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
