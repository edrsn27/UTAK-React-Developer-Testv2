import React from "react";
import Layout from "../../layouts/Dashboard";
import AddProductCategories from "../../components/Modals/AddProductCategories";
import ProductCategoriesTable from "../../components/Tables/Categories";
export default function Index() {
  return (
    <Layout>
      <AddProductCategories />
      <br />
      <br />
      <br />
      <ProductCategoriesTable />
    </Layout>
  );
}

Index.layout = Layout;
