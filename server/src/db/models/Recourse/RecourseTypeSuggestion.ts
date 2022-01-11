import { DataTypes, Model } from "sequelize";

import Recourse from "./Recourse";
import RecourseType from "./RecourseType";
import User from "../User";

import sequelizeConnection from "../../config";

interface RecourseTypeSuggestionAttributes {
	type_name: string;
	recourse_id: number;
	user_id: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseTypeSuggestionInput
	extends RecourseTypeSuggestionAttributes {}
export interface RecourseTypeSuggestionOutput
	extends Required<RecourseTypeSuggestionAttributes> {}

class RecourseTypeSuggestion
	extends Model<RecourseTypeSuggestionAttributes, RecourseTypeSuggestionInput>
	implements RecourseTypeSuggestionAttributes
{
	public recourse_id!: number;
	public type_name!: string;
	public user_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseTypeSuggestion.init(
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
		type_name: {
			primaryKey: true,
			type: DataTypes.TEXT,
			allowNull: false,
			references: {
				model: RecourseType,
				key: "name",
			},
		},
	},
	{ timestamps: true, sequelize: sequelizeConnection }
);

export default RecourseTypeSuggestion;
