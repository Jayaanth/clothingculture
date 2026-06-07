import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  login
} from "../api/authApi";

export default function Login() {

  const navigate =
    useNavigate();

  const [username,
    setUsername] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [error,
    setError] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        setError("");

        const response =
          await login(
            username,
            password
          );

        localStorage.setItem(
          "token",
          response.access_token
        );

        navigate("/admin");

      } catch (err) {

        console.error(err);

        setError(
          "Invalid username or password"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div
      className="
      admin-login-page
      "
    >

      <div
        className="
        admin-login-card
        "
      >

        <h1>
          ClothingCulture
        </h1>

        <p>
          Admin Dashboard
        </p>

        <form
          onSubmit={
            handleLogin
          }
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          {error && (

            <div
              className="
              login-error
              "
            >
              {error}
            </div>

          )}

          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Signing In..."
              : "Sign In"}

          </button>

        </form>

      </div>

    </div>

  );

}