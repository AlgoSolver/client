import { useInfiniteQuery, useMutation } from "react-query";
import { request, configOptions } from "./index";

export const useCodes = ({username,...props}) =>
  useInfiniteQuery(
    "codes",
    ({ pageParam = 1 }) => {
      return request(`/code/user/${username}?page=${pageParam}`, "get");
    },
    {
      select: (data) => {
        return {
          pages: {
            ...data.pages[data.pages.length - 1],
            docs: data.pages.map((item) => item.docs).flat(),
          },
        };
      },
      ...props,
      ...configOptions,
    }
  );

export const useCreateCode = () => {
  return useMutation((data) => request("/code", "post", data), {
    ...configOptions,
  });
};
