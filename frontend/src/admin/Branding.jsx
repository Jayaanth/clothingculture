import {
  useEffect,
  useState
} from "react";

import AdminLayout from "./components/AdminLayout";

import {
  getBranding,
  updateBranding,
  uploadLogo
} from "../api/brandingApi";

export default function Branding() {

  const [form,
    setForm] =
    useState(null);

  const [saving,
    setSaving] =
    useState(false);

  useEffect(() => {

    loadBranding();

  }, []);

  async function loadBranding() {

    try {

      const data =
        await getBranding();

      setForm(data);

    } catch (error) {

      console.error(error);

    }

  }

  async function handleLogoUpload(
    e
  ) {

    const file =
      e.target.files[0];

    if (!file) return;

    try {

      const result =
        await uploadLogo(
          file
        );

      setForm({
        ...form,
        logo:
          result.file_url
      });

    } catch (error) {

      console.error(error);

    }

  }

  async function handleSubmit(
    e
  ) {

    e.preventDefault();

    try {

      setSaving(true);

      await updateBranding(
        form
      );

      alert(
        "Branding updated"
      );

    } catch (error) {

      console.error(error);

    } finally {

      setSaving(false);

    }

  }

  if (!form) {

    return (
      <AdminLayout
        title="Branding"
      >
        Loading...
      </AdminLayout>
    );

  }

  return (

    <AdminLayout
      title="Branding"
    >

      <div
        className="
        branding-card
        "
      >

        <form
          onSubmit={
            handleSubmit
          }
        >

          <h2>
            Branding Settings
          </h2>

          <label>
            Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={
              handleLogoUpload
            }
          />

          {form.logo && (

            <img
              src={
                import.meta.env
                .VITE_API_BASE +
                form.logo
              }
              alt=""
              className="
              branding-preview
              "
            />

          )}

          <input
            type="text"
            placeholder="Hero Title"
            value={
              form.hero_title
            }
            onChange={(e)=>
              setForm({
                ...form,
                hero_title:
                e.target.value
              })
            }
          />

          <textarea
            rows="4"
            placeholder="Hero Subtitle"
            value={
              form.hero_subtitle
            }
            onChange={(e)=>
              setForm({
                ...form,
                hero_subtitle:
                e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="WhatsApp"
            value={
              form.whatsapp
            }
            onChange={(e)=>
              setForm({
                ...form,
                whatsapp:
                e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Instagram URL"
            value={
              form.instagram
            }
            onChange={(e)=>
              setForm({
                ...form,
                instagram:
                e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={
              form.email
            }
            onChange={(e)=>
              setForm({
                ...form,
                email:
                e.target.value
              })
            }
          />

          <label>
            Primary Color
          </label>

          <input
            type="color"
            value={
              form.primary_color
            }
            onChange={(e)=>
              setForm({
                ...form,
                primary_color:
                e.target.value
              })
            }
          />

          <label>
            Secondary Color
          </label>

          <input
            type="color"
            value={
              form.secondary_color
            }
            onChange={(e)=>
              setForm({
                ...form,
                secondary_color:
                e.target.value
              })
            }
          />

          <button
            type="submit"
          >

            {saving
              ? "Saving..."
              : "Save Changes"}

          </button>

        </form>

      </div>

    </AdminLayout>

  );

}