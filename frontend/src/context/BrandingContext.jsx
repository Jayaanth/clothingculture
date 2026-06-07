import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import {
  getBranding
} from "../api/brandingApi";

const BrandingContext =
  createContext();

export function BrandingProvider({
  children
}) {

  const [branding, setBranding] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const loadBranding =
    async () => {

      try {

        setLoading(true);

        const data =
          await getBranding();

        setBranding(data);

      } catch (err) {

        console.error(
          "Branding load failed",
          err
        );

        setError(err);

      } finally {

        setLoading(false);

      }
    };

  useEffect(() => {

    loadBranding();

  }, []);

  const refreshBranding =
    async () => {

      await loadBranding();

    };

  const value = {

    branding,

    loading,

    error,

    refreshBranding

  };

  return (

    <BrandingContext.Provider
      value={value}
    >

      {children}

    </BrandingContext.Provider>

  );

}

export function useBranding() {

  const context =
    useContext(
      BrandingContext
    );

  if (!context) {

    throw new Error(
      "useBranding must be used inside BrandingProvider"
    );

  }

  return context;

}