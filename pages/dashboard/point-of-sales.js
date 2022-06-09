import React from "react";
import Layout from "../../layouts/Dashboard";
import CategoriesProducts from "../../components/Tabs/CategoriesProducts";
import ListOfProducts from "../../components/Lists/ListOfProducts";
import OrderList from "../../components/Tables/Order";
export default function Index() {
  return (
    <Layout>
      <CategoriesProducts />
      <div className="mt-4 ">
        <div className="grid h-24 grid-cols-3 ">
          <div>
            <ListOfProducts />
          </div>
          <div className="col-span-2 ">
            <OrderList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

Index.layout = Layout;
