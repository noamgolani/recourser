import { DataTypes, Model } from "sequelize";

import Recourse from "./Recourse";
import RecourseTag from "./RecourseTag";
import User from "../User";

import sequelizeConnection from "../../config";

interface RecourseTagSuggestionAttributes {
	tag_name: string;
	recourse_id: number;
	user_id: number;
	rank: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseTagSuggestionInput
	extends RecourseTagSuggestionAttributes {}
export interface RecourseTagSuggestionOutput
	extends Required<RecourseTagSuggestionAttributes> {}

class RecourseTagSuggestion
	extends Model<RecourseTagSuggestionAttributes, RecourseTagSuggestionInput>
	implements RecourseTagSuggestionAttributes
{
	public rank!: number;
	public recourse_id!: number;
	public tag_name!: string;
	public user_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseTagSuggestion.init(
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
		tag_name: {
			primaryKey: true,
			type: DataTypes.TEXT,
			allowNull: false,
			references: {
				model: RecourseTag,
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

export default RecourseTagSuggestion;
