import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "../api";
import {ROLES} from '../navigations/utils'
export const INITIAL_USER = {
  _id:null,
  username:null,
  email:null,
  role:ROLES.SIGNEDOUT
}

const request = async (url, method, data = null) => {
  try {
    const res = await axios[method](url, data);
    return res.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
};
const configOptions = {
  staleTime: Infinity,
  refetchOnWindowFocus: false,
  retry: false,
};

export const useAuth = (enabled = true) => {
  return useQuery("auth", () => request("/user/auth", "get"), {
    ...configOptions,
    enabled,
  });
};

export const useLogin = () => {
  return useMutation((data) => request("/user/login", "post", data), {
    retry: false,
    onSuccess: (data) => {
      const { token } = data;
      localStorage.setItem("algosolver_token", token);
      window.location.reload();
    },
  });
};
export const useLogout = () => {
  const client = useQueryClient();
  return useMutation((data) => request("/user/logout", "post", data), {
    retry: false,
    onSuccess: (data) => {
      client.setQueryData("auth", INITIAL_USER);
    },
  });
};

export const useGoogleLogin = () => {
  const client = useQueryClient();
  return useMutation((data) => request("/user/google-login", "post", data), {
    retry: false,
    onSuccess: (data) => {
      const { user, token } = data;
      localStorage.setItem("algosolver_token", token);
      client.setQueryData("auth", user);
    },
  });
};

export const useSignup = () => {
  return useMutation((data) => request("/user/signup", "post", data), {
    retry: false,
  });
};

export const useActivateAccount = () => {
  return useMutation(
    (data) => request("/user/activate-account", "post", data),
    {
      retry: false,
    }
  );
};

export const usePasswordRecovery = () => {
  return useMutation(
    (data) => request("/user/email-verification", "post", data),
    {
      retry: false,
    }
  );
};

export const useTokenVerification = () => {
  return useMutation(
    (data) => request("/user/token-verification", "post", data),
    {
      retry: false,
    }
  );
};
export const usePassswordReset = () => {
  return useMutation((data) => request("/user/reset-password", "post", data), {
    retry: false,
  });
};
