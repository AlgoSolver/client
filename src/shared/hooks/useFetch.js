import { useState, useCallback } from "react";
import axios from "../../api/";

export const useFetch = () => {
  const [error, setErrors] = useState(null);
  const [loading, setLoading] = useState(null);
  const [res, setRes] = useState(null);

  const request = useCallback(
    async (url, method = "get", data = null, headers = {}, params = null) => {
      try {
        setLoading(true);
        const resData = await axios[method](url, data, headers, params);
        setLoading(false);
        setRes(resData.data);
        return;
      } catch (err) {
        setError(
          err?.response?.data?.message || err?.response?.data?.error?.message
        );
        setLoading(false);
        throw err;
      }
    },
    []
  );
  const setError = (err) => {
    setErrors(err);
  };
  const clearError = () => {
    setError(null);
  };

  return { request, error, res, loading, clearError, setError };
};
