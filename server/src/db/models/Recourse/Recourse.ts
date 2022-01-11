import { DataTypes, Model, Optional } from "sequelize";

import User from "../User";
import sequelizeConnection from "../../config";

interface RecourseAttributes {
	id: number;
	url: string;
	creator_id: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface RecourseInput extends Optional<RecourseAttributes, "id"> {}
export interface RecourseOutput extends Required<RecourseAttributes> {}

class Recourse
	extends Model<RecourseAttributes, RecourseInput>
	implements RecourseAttributes
{
	public id!: number;
	public url!: string;
	public creator_id!: number;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

Recourse.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		creator_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: User,
				key: "id",
			},
		},
	},
	{ timestamps: true, sequelize: sequelizeConnection, paranoid: true }
);

export default Recourse;
