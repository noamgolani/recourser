import { DataTypes, Model, Optional } from "sequelize";

import sequelizeConnection from "../../config";

interface ResourceTagAttributes {
  name: string;
  approved: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceTagInput
  extends Optional<ResourceTagAttributes, "approved"> {}
export interface ResourceTagOutput extends Required<ResourceTagAttributes> {}

class ResourceTag
  extends Model<ResourceTagAttributes, ResourceTagInput>
  implements ResourceTagAttributes
{
  public name!: string;
  public approved!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceTag.init(
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

export default ResourceTag;
