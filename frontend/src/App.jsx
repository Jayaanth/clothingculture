import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

import Products from "./admin/Products";
import Categories from "./admin/Categories";
import Branding from "./admin/Branding";
import Inquiries from "./admin/Inquiries";

import ProtectedRoute from "./admin/router/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/branding"
          element={
            <ProtectedRoute>
              <Branding />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/inquiries"
          element={
            <ProtectedRoute>
              <Inquiries />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;