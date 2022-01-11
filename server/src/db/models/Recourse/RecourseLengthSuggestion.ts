import { DataTypes, Model } from "sequelize";

import Recourse from "./Recourse";
import User from "../User";

import sequelizeConnection from "../../config";

interface RecourseLengthSuggestionAttributes {
	recourse_id: number;
	length: number;
	user_id: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseLengthSuggestionInput extends RecourseLengthSuggestionAttributes {}
export interface RecourseLengthSuggestionOutput extends Required<RecourseLengthSuggestionAttributes> {}

class RecourseLengthSuggestion
	extends Model<RecourseLengthSuggestionAttributes, RecourseLengthSuggestionInput>
	implements RecourseLengthSuggestionAttributes
{
	public recourse_id!: number;
	public length!: number;
	public user_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseLengthSuggestion.init(
	{
		recourse_id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Recourse,
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

export default RecourseLengthSuggestion;
