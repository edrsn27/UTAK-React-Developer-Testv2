import React from "react";
import Layout from "../../layouts/Dashboard";
import CategoriesProducts from "../../components/Tabs/CategoriesProducts";
export default function Index() {
  return (
    <Layout>
      <CategoriesProducts />
    </Layout>
  );
}

Index.layout = Layout;
