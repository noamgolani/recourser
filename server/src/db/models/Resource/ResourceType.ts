import { DataTypes, Model, Optional } from "sequelize";

import sequelizeConnection from "../../config";

interface ResourceTypeAttributes {
  name: string;
  approved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceTypeInput
  extends Optional<ResourceTypeAttributes, "approved"> {}
export interface ResourceTypeOutput extends Required<ResourceTypeAttributes> {}

class ResourceType
  extends Model<ResourceTypeAttributes, ResourceTypeInput>
  implements ResourceTypeAttributes
{
  public name!: string;
  public approved!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceType.init(
  {
    name: {
      primaryKey: true,
      type: DataTypes.TEXT,
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceType;
