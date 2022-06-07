import React from "react";
import Layout from "../../layouts/Dashboard";
import AddProductCategories from "../../components/Modals/AddProductCategories";
export default function Index() {
  return (
    <Layout>
      <AddProductCategories />
    </Layout>
  );
}

Index.layout = Layout;
