import React, { FC } from "react";
import { useGetAllResources } from "../../queries";
import ResourceListItem from "./ResourceListItem";

const ResourceList: FC = () => {
  const { isLoading, error, data } = useGetAllResources();
  return (
    <div className="resource-list">
      {!isLoading &&
        data &&
        data.map((resource) => (
          <ResourceListItem key={resource.id} resource={resource} />
        ))}
    </div>
  );
};

export default ResourceList;
