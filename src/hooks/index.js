import { QueryClient } from "react-query";

const client = new QueryClient();

export const updateState = (key, value) => {
	client.setQueryData(key, value);
};

export default client;