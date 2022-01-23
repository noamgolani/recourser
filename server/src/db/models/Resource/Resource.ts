import { DataTypes, Model, Optional } from "sequelize";

import User from "../User";
import sequelizeConnection from "../../config";

interface ResourceAttributes {
  id: number;
  url: string;
  creator_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResourceInput extends Optional<ResourceAttributes, "id"> {}
export interface ResourceOutput extends Required<ResourceAttributes> {}

class Resource
  extends Model<ResourceAttributes, ResourceInput>
  implements ResourceAttributes
{
  public id!: number;
  public url!: string;
  public creator_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  { timestamps: true, sequelize: sequelizeConnection, paranoid: true }
);

export default Resource;
