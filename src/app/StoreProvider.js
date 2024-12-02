"use client";

import { makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  // store ref
  const storeRef = useRef();

  // Create the store instance the first time this renders
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
