import React, { FC } from "react";
import { ResourceDataOutput } from "../../../../server/src";

export interface ResourceListItemProps {
  resource: ResourceDataOutput;
}

const ResourceListItem: FC<ResourceListItemProps> = ({ resource }) => {
  return (
    <div className="resource-list-item">
      {resource.name} : {resource.type}
    </div>
  );
};

export default ResourceListItem;
