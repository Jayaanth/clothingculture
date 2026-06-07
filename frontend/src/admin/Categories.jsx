import {
  useEffect,
  useState
} from "react";

import AdminLayout from "./components/AdminLayout";

import {
  getCategories,
  createCategory,
  deleteCategory
} from "../api/categoryApi";

export default function Categories() {

  const [categories,
    setCategories] =
    useState([]);

  const [name,
    setName] =
    useState("");

  const [loading,
    setLoading] =
    useState(true);

  const [saving,
    setSaving] =
    useState(false);

  useEffect(() => {

    loadCategories();

  }, []);

  async function loadCategories() {

    try {

      const data =
        await getCategories();

      setCategories(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function handleSubmit(
    e
  ) {

    e.preventDefault();

    try {

      setSaving(true);

      await createCategory({
        name
      });

      setName("");

      await loadCategories();

    } catch (error) {

      console.error(error);

    } finally {

      setSaving(false);

    }

  }

  async function removeCategory(
    id
  ) {

    const confirmed =
      window.confirm(
        "Delete category?"
      );

    if (!confirmed) {
      return;
    }

    try {

      await deleteCategory(id);

      await loadCategories();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <AdminLayout
      title="Categories"
    >

      <div
        className="
        category-admin-grid
        "
      >

        <div
          className="
          admin-form-card
          "
        >

          <h2>
            Add Category
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <input
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e)=>
                setName(
                  e.target.value
                )
              }
              required
            />

            <button
              type="submit"
            >

              {saving
                ? "Saving..."
                : "Add Category"}

            </button>

          </form>

        </div>

        <div
          className="
          admin-table-card
          "
        >

          <h2>
            Categories
          </h2>

          {loading ? (

            <p>
              Loading...
            </p>

          ) : (

            <table
              className="
              admin-table
              "
            >

              <thead>

                <tr>

                  <th>
                    ID
                  </th>

                  <th>
                    Category
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {categories.map(
                  (category)=>(
                    <tr
                      key={
                        category.id
                      }
                    >

                      <td>
                        {category.id}
                      </td>

                      <td>
                        {category.name}
                      </td>

                      <td>

                        <button
                          className="
                          delete-btn
                          "
                          onClick={() =>
                            removeCategory(
                              category.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </AdminLayout>

  );

}