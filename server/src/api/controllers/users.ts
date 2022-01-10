import { Handler } from 'express';

import * as userDal from '../../db/dal/user';

export const getAllUsers: Handler = async (req,res,next) => {
	res.send(await userDal.getAll())
	next();
} 
