import { DataTypes, Model, Optional } from "sequelize";

import Recourse from "./Recourse";
import User from "../User";

import sequelizeConnection from "../../config";

interface RecourseViewAttributes {
	user_id: number;
	recourse_id: number;
	rating: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface RecourseViewInput
	extends Optional<RecourseViewAttributes, "rating"> {}
export interface RecourseViewOutput extends Required<RecourseViewAttributes> {}

class RecourseView
	extends Model<RecourseViewAttributes, RecourseViewInput>
	implements RecourseViewAttributes
{
	public user_id!: number;
	public recourse_id!: number;
	public rating!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

RecourseView.init(
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
				model: Recourse,
				key: "id",
			},
		},
	},
	{ timestamps: true, sequelize: sequelizeConnection }
);

export default RecourseView;
