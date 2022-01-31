import React, { FC } from "react";
import { useGetAllResources } from "../../queries";
import ResourceListItem from "./ResourceListItem";

const ResourceList: FC = () => {
  const { isLoading, error, data } = useGetAllResources();
  return (
    <div className="resource-list">
      {isLoading && <span>Loading resources...</span>}
      {!isLoading && error && (
        <span className="error"> {JSON.stringify(error)}</span>
      )}
      {!isLoading &&
        data &&
        data.map((resource) => <ResourceListItem resource={resource} />)}
    </div>
  );
};

export default ResourceList;
