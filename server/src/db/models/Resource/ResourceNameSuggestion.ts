import { DataTypes, Model } from "sequelize";

import Resource from "./Resource";
import User from "../User";

import sequelizeConnection from "../../config";

interface ResourceNameSuggestionAttributes {
  recourse_id: number;
  name: string;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceNameSuggestionInput
  extends ResourceNameSuggestionAttributes {}
export interface ResourceNameSuggestionOutput
  extends Required<ResourceNameSuggestionAttributes> {}

class ResourceNameSuggestion
  extends Model<ResourceNameSuggestionAttributes, ResourceNameSuggestionInput>
  implements ResourceNameSuggestionAttributes
{
  public recourse_id!: number;
  public name!: string;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceNameSuggestion.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceNameSuggestion;
