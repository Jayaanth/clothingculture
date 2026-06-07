import {
  useEffect,
  useState
} from "react";

import AdminLayout from "./components/AdminLayout";

import {
  getInquiries,
  deleteInquiry
} from "../api/inquiryApi";

export default function Inquiries() {

  const [inquiries,
    setInquiries] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    loadInquiries();

  }, []);

  async function loadInquiries() {

    try {

      const data =
        await getInquiries();

      setInquiries(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function removeInquiry(
    id
  ) {

    const confirmed =
      window.confirm(
        "Delete inquiry?"
      );

    if (!confirmed) {
      return;
    }

    try {

      await deleteInquiry(id);

      await loadInquiries();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <AdminLayout
      title="Inquiries"
    >

      <div
        className="
        inquiry-header
        "
      >

        <h2>
          Customer Inquiries
        </h2>

        <span
          className="
          inquiry-count
          "
        >
          {inquiries.length}
          {" "}
          Total
        </span>

      </div>

      <div
        className="
        inquiry-list
        "
      >

        {loading && (

          <div>
            Loading...
          </div>

        )}

        {!loading &&
          inquiries.length === 0 && (

          <div
            className="
            inquiry-empty
            "
          >

            No inquiries found

          </div>

        )}

        {!loading &&
          inquiries.map(
            (inquiry) => (

              <div
                key={
                  inquiry.id
                }
                className="
                inquiry-card
                "
              >

                <div
                  className="
                  inquiry-top
                  "
                >

                  <div>

                    <h3>
                      {
                        inquiry.name
                      }
                    </h3>

                    <p>
                      {
                        inquiry.email
                      }
                    </p>

                    <p>
                      {
                        inquiry.phone
                      }
                    </p>

                  </div>

                  <button
                    className="
                    delete-btn
                    "
                    onClick={() =>
                      removeInquiry(
                        inquiry.id
                      )
                    }
                  >
                    Delete
                  </button>

                </div>

                <div
                  className="
                  inquiry-message
                  "
                >

                  {
                    inquiry.message
                  }

                </div>

              </div>

            )
          )}

      </div>

    </AdminLayout>

  );

}