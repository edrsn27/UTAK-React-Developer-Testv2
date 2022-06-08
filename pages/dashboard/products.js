import React, { useEffect } from "react";
import Layout from "../../layouts/Dashboard";
import AddProduct from "../../components/Modals/AddProduct";
import ProductsTable from "../../components/Tables/Products";

// import {
//   getDatabase,
//   ref,
//   query,
//   orderByChild,
//   equalTo,
//   get,
// } from "firebase/database";
// import { db } from "../../firebase-config";

export default function Index() {
  // useEffect(() => {
  //   const productsRef = ref(db, "products/");

  //   const queryConstraints = [orderByChild("category"), equalTo("Meal")];
  //   get(query(productsRef, ...queryConstraints)).then((snapshot) => {
  //     console.log(snapshot.val());
  //   });
  // }, []);

  return (
    <Layout>
      <AddProduct />
      <br />
      <br />
      <br />
      <ProductsTable />
    </Layout>
  );
}

Index.layout = Layout;
