import React from "react";
import Nav from "../components/Navs/Nav";
import Header from "../components/Headers/Header";
export default function Dashboard({ children }) {
  return (
    <div className="min-h-full">
      <Nav />
      <Header />
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-gray-200 border-dashed rounded-lg h-96" />
            </div> */}
          {children}
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}
