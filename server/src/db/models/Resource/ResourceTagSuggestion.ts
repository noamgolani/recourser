import { DataTypes, Model } from "sequelize";

import Resource from "./Resource";
import ResourceTag from "./ResourceTag";
import User from "../User";

import sequelizeConnection from "../../config";

interface ResourceTagSuggestionAttributes {
  tag_name: string;
  recourse_id: number;
  user_id: number;
  rank: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceTagSuggestionInput
  extends ResourceTagSuggestionAttributes {}
export interface ResourceTagSuggestionOutput
  extends Required<ResourceTagSuggestionAttributes> {}

class ResourceTagSuggestion
  extends Model<ResourceTagSuggestionAttributes, ResourceTagSuggestionInput>
  implements ResourceTagSuggestionAttributes
{
  public rank!: number;
  public recourse_id!: number;
  public tag_name!: string;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceTagSuggestion.init(
  {
    recourse_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Resource,
        key: "id",
      },
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
    tag_name: {
      primaryKey: true,
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: ResourceTag,
        key: "name",
      },
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceTagSuggestion;
