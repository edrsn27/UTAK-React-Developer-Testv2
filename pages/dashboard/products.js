import React from "react";
import Layout from "../../layouts/Dashboard";
import AddProduct from "../../components/Modals/AddProduct";
import ProductsTable from "../../components/Tables/Products";
export default function Index() {
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
