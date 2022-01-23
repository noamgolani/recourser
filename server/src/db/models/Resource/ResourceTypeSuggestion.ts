import { DataTypes, Model } from "sequelize";

import Resource from "./Resource";
import ResourceType from "./ResourceType";
import User from "../User";

import sequelizeConnection from "../../config";

interface ResourceTypeSuggestionAttributes {
  type_name: string;
  recourse_id: number;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceTypeSuggestionInput
  extends ResourceTypeSuggestionAttributes {}
export interface ResourceTypeSuggestionOutput
  extends Required<ResourceTypeSuggestionAttributes> {}

class ResourceTypeSuggestion
  extends Model<ResourceTypeSuggestionAttributes, ResourceTypeSuggestionInput>
  implements ResourceTypeSuggestionAttributes
{
  public recourse_id!: number;
  public type_name!: string;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceTypeSuggestion.init(
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
    type_name: {
      primaryKey: true,
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: ResourceType,
        key: "name",
      },
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceTypeSuggestion;
