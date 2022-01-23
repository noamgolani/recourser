import {} from "../models/Resource";

import User, { UserInput, UserOutput } from "../models/User";

export const create = async (payload: UserInput): Promise<UserOutput> => {
  const user = await User.create(payload);
  return user;
};
