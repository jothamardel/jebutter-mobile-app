import { createContext, useState, FC } from "react";

export const OrderContext = createContext({
  value: [],
  setValue: (value: any) => {},
});

const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState([]);

  console.log({ value });

  return (
    <OrderContext.Provider value={{ value, setValue }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
