import {
  useEffect,
  useState
} from "react";

import AdminLayout from "./components/AdminLayout";

import {
  getDashboardStats
} from "../api/dashboardApi";

import StatCard from "./components/StatCard";

import {
  Package,
  Tags,
  MessageSquare
} from "lucide-react";

export default function Dashboard() {

  const [stats,
    setStats] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  const [error,
    setError] =
    useState("");

  useEffect(() => {

    loadStats();

  }, []);

  async function loadStats() {

    try {

      const data =
        await getDashboardStats();

      setStats(data);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to load dashboard"
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <AdminLayout
      title="Dashboard"
    >

      {loading && (

        <div
          className="
          dashboard-loading
          "
        >
          Loading...
        </div>

      )}

      {error && (

        <div
          className="
          dashboard-error
          "
        >
          {error}
        </div>

      )}

      {!loading &&
        !error &&
        stats && (

        <>

          <div
            className="
            dashboard-grid
            "
          >

            <StatCard
              title="Products"
              value={
                stats.total_products
              }
              icon={
                <Package
                  size={28}
                />
              }
            />



            <StatCard
              title="Inquiries"
              value={
                stats.total_inquiries
              }
              icon={
                <MessageSquare
                  size={28}
                />
              }
            />

          </div>

          <div
            className="
            quick-actions
            "
          >

            <h3>
              Quick Actions
            </h3>

            <div
              className="
              action-grid
              "
            >

              <a
                href="/admin/products"
                className="
                action-card
                "
              >
                Add Product
              </a>


              <a
                href="/admin/branding"
                className="
                action-card
                "
              >
                Update Branding
              </a>

              <a
                href="/admin/inquiries"
                className="
                action-card
                "
              >
                View Inquiries
              </a>

            </div>

          </div>

        </>

      )}

    </AdminLayout>

  );

}