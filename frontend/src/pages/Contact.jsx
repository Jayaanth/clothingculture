import {
  useState
} from "react";

import Navbar
from "../components/layout/Navbar";

import Footer
from "../components/layout/Footer";

import {
  createInquiry
} from "../api/inquiryApi";

export default function Contact() {

  const [formData,
    setFormData] =
    useState({

      name: "",

      email: "",

      phone: "",

      message: ""

    });

  const [loading,
    setLoading] =
    useState(false);

  const [success,
    setSuccess] =
    useState(false);

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value

      });

    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await createInquiry(
          formData
        );

        setSuccess(true);

        setFormData({

          name: "",

          email: "",

          phone: "",

          message: ""

        });

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

  return (

    <>

      <Navbar />

      <section
        className="
        contact-section
        "
      >

        <div
          className="
          container
          "
        >

          <h1
            className="
            section-title
            gradient-text
            "
          >
            Contact Us
          </h1>

          <p
            className="
            contact-subtitle
            "
          >
            Tell us what
            you're looking for
            and we'll get
            back to you.
          </p>

          <form
            onSubmit={
              handleSubmit
            }
            className="
            contact-form
            "
          >

            <input
              name="name"
              placeholder="Name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={
                formData.phone
              }
              onChange={
                handleChange
              }
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us what products you need..."
              value={
                formData.message
              }
              onChange={
                handleChange
              }
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="
              contact-btn
              "
            >

              {loading
                ? "Sending..."
                : "Send Inquiry"}

            </button>

            {success && (

              <div
                className="
                success-message
                "
              >

                Inquiry sent successfully.

              </div>

            )}

          </form>

        </div>

      </section>

      <Footer />

    </>

  );

}