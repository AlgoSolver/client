import { useQuery, useMutation } from "react-query";
import client from "./index";
import axios from "../api";
import fetch from "axios";
import { getLocalStorage } from "../utils/local-storage";

const codeRequest = async (data) => {
  try {
    const res = await fetch.post(
      "https://algosolver-playground.herokuapp.com/api/runCode",
      data
    );
    res.data.id = Math.random() * 10000;
    return res.data;
  } catch (err) {
    throw new Error(
      err?.response?.data?.message || "Network Error, please try again later."
    );
  }
};
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

export const useCodePlayGround = (id) => {
  return useQuery("problem-code-test", () => {}, {
    ...configOptions,
    initialData: {
      code: getLocalStorage(`problem-code-${id}`),
    },
  });
};

export const updateCodePlayGround = (arg) => {
  client.setQueryData("problem-code-test", (oldData) => ({
    ...oldData,
    ...arg,
  }));
};
export const useProblems = (page = 1) => {
  return useQuery(
    ["problems", page],
    () => request(`/problems?page=${page}`, "get"),
    configOptions
  );
};
export const useSubmitCode = () => {
  return useMutation(
    (data) => request(`/submissions`, "post", data),
    configOptions
  );
};

export const useListen = (key) => {
  return useQuery(key, () => {}, configOptions);
};
export const useRunCode = () => {
  return useMutation((data) => codeRequest(data), {
    retry: false,
    onSuccess: (data) => {
      client.setQueryData("runCodeResults", data);
    },
  });
};
export const useRunCodeOnPlayground = () => {
  return useMutation((data) => codeRequest(data), {
    retry: false,
    onSuccess: (data) => {
      client.setQueryData("playground-console", data);
    },
  });
};
export const useTemp = (name, path,options={}) => {
  return useQuery(name, () => request(path, "get"), {...configOptions,...options});
};
export const useProblem = (id) => {
  return useQuery(["problem", id], () => request(`/problems/${id}`, "get"), {
    ...configOptions,
    cacheTime: 5000,
  });
};
