import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../Page/ProductDetail";
import { useLocation } from "react-router";

const PrivateRoute = ({ authenticate }) => {
  return authenticate == true? <ProductDetail />: <Navigate to="/login" />;
};

export default PrivateRoute;