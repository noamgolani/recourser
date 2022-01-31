import { useQuery } from "react-query";
import { apiAxios } from ".";

const getAllResourcesKey = "get-all-resources";

const useGetAllResources = () =>
  useQuery(getAllResourcesKey, async () => {
    return await apiAxios.get("resources").then((value) => value.data);
  });

export default useGetAllResources;
