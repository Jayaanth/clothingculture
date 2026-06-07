import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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

        {/* Public Website */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/catalog"
          element={<Catalog />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Admin */}

        <Route
          path="/admin/login"
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

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;