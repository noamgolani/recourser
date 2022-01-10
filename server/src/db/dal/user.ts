import { Op } from "sequelize";

import User, { UserInput, UserOutput } from "../models/User";

export const create = async (payload: UserInput): Promise<UserOutput> => {
	const user = await User.create(payload);
	return user;
};

export const update = async (
	id: number,
	payload: Partial<UserInput>
): Promise<UserOutput> => {
	const user = await User.findByPk(id);
	// TODO create custom error
	if (!user) throw new Error("Not found");
	const updated = await user.update(payload);
	return updated;
};

export const getById = async (id: number): Promise<UserOutput> => {
	const user = await User.findByPk(id);
	// TODO create custom error
	if (!user) throw new Error("Not found");
	return user;
};

export const deleteById = async (id: number): Promise<boolean> => {
	const deletedCount = await User.destroy({
		where: { id },
	});
	return !!deletedCount;
};

export interface GetAllUsersFilters {
	isDeleted?: boolean;
	includeDeleted?: boolean;
}

export const getAll = async (
	filters?: GetAllUsersFilters
): Promise<UserOutput[]> => {
	return User.findAll({
		where: {
			...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
		},
		...((filters?.isDeleted || filters?.includeDeleted) && {
			paranoid: true,
		}),
	});
};
