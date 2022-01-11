import { DataTypes, Model } from "sequelize";

import Recourse from "./Recourse";
import User from "../User";

import sequelizeConnection from "../../config";

interface RecourseNameSuggestionAttributes {
	recourse_id: number;
	name: string;
	user_id: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseNameSuggestionInput extends RecourseNameSuggestionAttributes {}
export interface RecourseNameSuggestionOutput extends Required<RecourseNameSuggestionAttributes> {}

class RecourseNameSuggestion
	extends Model<RecourseNameSuggestionAttributes, RecourseNameSuggestionInput>
	implements RecourseNameSuggestionAttributes
{
	public recourse_id!: number;
	public name!: string;
	public user_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseNameSuggestion.init(
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
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ timestamps: true, sequelize: sequelizeConnection }
);

export default RecourseNameSuggestion;
