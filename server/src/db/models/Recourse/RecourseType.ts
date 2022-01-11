import { DataTypes, Model, Optional } from "sequelize";

import sequelizeConnection from "../../config";

interface RecourseTypeAttributes {
	name: string;
	approved: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseTypeInput
	extends Optional<RecourseTypeAttributes, "approved"> {}
export interface RecourseTypeOutput extends Required<RecourseTypeAttributes> {}

class RecourseType
	extends Model<RecourseTypeAttributes, RecourseTypeInput>
	implements RecourseTypeAttributes
{
	public name!: string;
	public approved!: boolean;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseType.init(
	{
		name: {
			primaryKey: true,
			type: DataTypes.TEXT,
			allowNull: false,
		},
		approved: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
	},
	{ timestamps: true, sequelize: sequelizeConnection }
);

export default RecourseType;
