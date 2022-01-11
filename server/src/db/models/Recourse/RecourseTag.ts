import { DataTypes, Model, Optional } from "sequelize";

import sequelizeConnection from "../../config";

interface RecourseTagAttributes {
	name: string;
	approved: boolean;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface RecourseTagInput
	extends Optional<RecourseTagAttributes, "approved"> {}
export interface RecourseTagOutput extends Required<RecourseTagAttributes> {}

class RecourseTag
	extends Model<RecourseTagAttributes, RecourseTagInput>
	implements RecourseTagAttributes
{
	public name!: string;
	public approved!: boolean;

	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

RecourseTag.init(
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

export default RecourseTag;
