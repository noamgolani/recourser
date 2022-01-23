import { DataTypes, Model } from "sequelize";

import Resource from "./Resource";
import User from "../User";

import sequelizeConnection from "../../config";

interface ResourceLengthSuggestionAttributes {
  recourse_id: number;
  length: number;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ResourceLengthSuggestionInput
  extends ResourceLengthSuggestionAttributes {}
export interface ResourceLengthSuggestionOutput
  extends Required<ResourceLengthSuggestionAttributes> {}

class ResourceLengthSuggestion
  extends Model<
    ResourceLengthSuggestionAttributes,
    ResourceLengthSuggestionInput
  >
  implements ResourceLengthSuggestionAttributes
{
  public recourse_id!: number;
  public length!: number;
  public user_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceLengthSuggestion.init(
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
    length: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { timestamps: true, sequelize: sequelizeConnection }
);

export default ResourceLengthSuggestion;
