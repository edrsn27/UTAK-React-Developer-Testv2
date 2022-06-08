import React, { createContext, useContext, useEffect } from "react";

const QueryContext = createContext();
const useQuery = () => {
  return useContext(QueryContext);
};
export default function QueryProvider({ children }) {

    
  useEffect(() => {

  }, []);

  const value = {};
  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
}
