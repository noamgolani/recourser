import { DataTypes, Model } from "sequelize";

import Recourse from "./Recourse";

import sequelizeConnection from "../../config";

interface RecourseNameAttributes {
	recourse_id: number;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface RecourseNameInput extends RecourseNameAttributes {}
export interface RecourseNameOutput extends Required<RecourseNameAttributes> {}

class RecourseName
	extends Model<RecourseNameAttributes, RecourseNameInput>
	implements RecourseNameAttributes
{
	public recourse_id!: number;
	public name!: string;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

RecourseName.init(
	{
		name: {
			primaryKey: true,
			type: DataTypes.STRING,
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

export default RecourseName;
