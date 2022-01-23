import { DataTypes, Model, Optional } from "sequelize";

import Resource from "./Resource";
import User from "../User";

import sequelizeConnection from "../../config";

interface ResourceViewAttributes {
  user_id: number;
  recourse_id: number;
  rating: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ResourceViewInput
  extends Optional<ResourceViewAttributes, "rating"> {}
export interface ResourceViewOutput extends Required<ResourceViewAttributes> {}

class ResourceView
  extends Model<ResourceViewAttributes, ResourceViewInput>
  implements ResourceViewAttributes
{
  public user_id!: number;
  public recourse_id!: number;
  public rating!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

ResourceView.init(
  {
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: -1,
      allowNull: false,
    },
    user_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    recourse_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Resource,
        key: "id",
      },
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceView;
