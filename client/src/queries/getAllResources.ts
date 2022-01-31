import { useQuery } from "react-query";
import { apiAxios } from ".";

import { ResourceDataOutput } from "../../../server/src/index";

const getAllResourcesKey = "get-all-resources";

const useGetAllResources = () =>
  useQuery<ResourceDataOutput[]>(getAllResourcesKey, async () => {
    return await apiAxios.get("resources").then((value) => value.data);
  });

export default useGetAllResources;
