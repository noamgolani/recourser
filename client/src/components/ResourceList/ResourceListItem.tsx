import React, { FC } from "react";
import { FiClock } from "react-icons/fi";
import { ResourceDataOutput } from "../../../../server/src";

export interface ResourceListItemProps {
  resource: ResourceDataOutput;
}

const ResourceListItem: FC<ResourceListItemProps> = ({ resource }) => {
  return (
    <div className="resource-list-item">
      <span>{resource.type}</span>
      <span>{resource.name}</span>
      <span>{resource.tag}</span>
      <span className="flex-between">
        {Math.floor(resource.length)}
        <FiClock />
      </span>
    </div>
  );
};

export default ResourceListItem;
