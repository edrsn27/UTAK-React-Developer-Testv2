import React from "react";
import Layout from "../../layouts/Dashboard";
import CategoriesProducts from "../../components/Tabs/CategoriesProducts";
import ListOfProducts from "../../components/Lists/ListOfProducts";
import OrderList from "../../components/Lists/OrderList";
export default function Index() {
  return (
    <Layout>
      <CategoriesProducts />
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div
          //   style={{ backgroundColor: "red" }}
          >
            <ListOfProducts />
          </div>
          <div
            className="col-span-2 "
            //   style={{ backgroundColor: "blue" }}
          >
            <OrderList />
          </div>
        </div>
      </div>
    </Layout>
  );
}

Index.layout = Layout;
