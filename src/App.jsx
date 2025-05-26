import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Halaman langsung
import About from "./pages/About";
import ProductForm from "./pages/ProductForm";


// Lazy loaded
const GuestDashboard = React.lazy(() => import("./pages/GuestDashboard"));
const Loading = React.lazy(() => import("./components/Loading"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage401 = React.lazy(() => import("./pages/ErrorPage401"));
const ErrorPage403 = React.lazy(() => import("./pages/ErrorPage403"));
const ErrorPage404 = React.lazy(() => import("./pages/ErrorPage404"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const User = React.lazy(() => import("./pages/User"));
const Testi = React.lazy(() => import("./pages/Testi"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* GUEST ROUTES */}
        <Route element={<GuestLayout />}>
          <Route path="/GuestDashboard" element={<GuestDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductForm />} />
          <Route path="/testi" element={<Testi />} />  {/* <-- Tambahkan ini */}
        </Route>

        {/* MAIN ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<GuestDashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/errorpage404" element={
            <ErrorPage404
              errorCode="400"
              errorTitle="Bad Request"
              errorDescription="Oops, something went wrong with your request."
              errorImage="/img/Graphic.png"
            />
          } />
          <Route path="/errorpage401" element={
            <ErrorPage401
              errorCode="401"
              errorTitle="Oops!"
              errorDescription="You are not authorized to view this page.."
              errorImage="/img/Graphic.png"
            />
          } />
          <Route path="/errorpage403" element={
            <ErrorPage403
              errorCode="403"
              errorTitle="Forbidden!"
              errorDescription="Access to this resource is denied"
              errorImage="/img/Graphic.png"
            />
          } />
        </Route>

        {/* AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;
