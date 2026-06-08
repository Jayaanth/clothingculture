import {
  useEffect,
  useState
} from "react";

import AdminLayout from "./components/AdminLayout";

import {
  getProducts,
  createProduct,
  deleteProduct
} from "../api/productApi";

export default function Products() {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [form, setForm] =
    useState({
      name: "",
      description: "",
      price: "",
      image: ""
    });

  useEffect(() => {

    loadProducts();

  }, []);

  async function loadProducts() {

    try {

      const data =
        await getProducts();

      setProducts(data);

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

      await createProduct(
        form
      );

      setForm({
        name: "",
        description: "",
        price: "",
        image: ""
      });

      await loadProducts();

    } catch (error) {

      console.error(error);

    } finally {

      setSaving(false);

    }

  }

  async function removeProduct(
    id
  ) {

    if (
      !window.confirm(
        "Delete product?"
      )
    ) {
      return;
    }

    try {

      await deleteProduct(id);

      await loadProducts();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <AdminLayout
      title="Products"
    >

      <div
        className="
        product-admin-grid
        "
      >

        <div
          className="
          admin-form-card
          "
        >

          <h2>
            Add Product
          </h2>

          <form
            onSubmit={
              handleSubmit
            }
          >

            <input
              type="text"
              placeholder="Product Name"
              value={form.name}
              onChange={(e)=>
                setForm({
                  ...form,
                  name:
                    e.target.value
                })
              }
              required
            />

            <textarea
              rows="4"
              placeholder="Description"
              value={
                form.description
              }
              onChange={(e)=>
                setForm({
                  ...form,
                  description:
                    e.target.value
                })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e)=>
                setForm({
                  ...form,
                  price:
                    e.target.value
                })
              }
              required
            />

            <input
              type="text"
              placeholder="Cloudinary Image URL"
              value={form.image}
              onChange={(e)=>
                setForm({
                  ...form,
                  image:
                    e.target.value
                })
              }
              required
            />

            {form.image && (

              <img
                src={form.image}
                alt="Preview"
                className="
                admin-product-image
                "
              />

            )}

            <button
              type="submit"
            >

              {saving
                ? "Saving..."
                : "Add Product"}

            </button>

          </form>

        </div>

        <div
          className="
          admin-table-card
          "
        >

          <h2>
            Products
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
                    Image
                  </th>

                  <th>
                    Name
                  </th>

                  <th>
                    Price
                  </th>

                  <th>
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {products.map(
                  (product) => (

                    <tr
                      key={
                        product.id
                      }
                    >

                      <td>

                        {product.image && (

                          <img
                            src={
                              product.image
                            }
                            alt={
                              product.name
                            }
                            className="
                            admin-product-image
                            "
                          />

                        )}

                      </td>

                      <td>
                        {product.name}
                      </td>

                      <td>
                        ₹{product.price}
                      </td>

                      <td>

                        <button
                          className="
                          delete-btn
                          "
                          onClick={() =>
                            removeProduct(
                              product.id
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