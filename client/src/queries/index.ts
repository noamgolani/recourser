import { QueryClient } from "react-query";
import axios from "axios";

// queries
export { default as useGetAllResources } from "./getAllResources";

// axios instances
export const apiAxios = axios.create({ baseURL: "http://localhost:8080/api/" });

// react query config
const queryClient = new QueryClient();
export { queryClient };
