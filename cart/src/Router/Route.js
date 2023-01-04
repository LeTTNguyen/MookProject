import { Route, Routes } from "react-router-dom";
import CartPage from '../Page/CartPage';
import DeliveryPage from "../Page/DeliveryPage";

let routes = (
  <Routes>
    <Route path="/cart" element={<CartPage />} />
    <Route path="/delivery" element={<DeliveryPage />} />

  </Routes>
);

export { routes };