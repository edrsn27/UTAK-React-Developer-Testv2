import React from "react";
import { useRouter } from "next/router";
export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="bg-white shadow">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {pathname == "/dashboard"
            ? "Dashboard"
            : pathname == "/dashboard/product-categories"
            ? "Categories"
            : pathname == "/dashboard/products"
            ? "Products"
            : "Point of Sales"}
        </h1>
      </div>
    </header>
  );
}
