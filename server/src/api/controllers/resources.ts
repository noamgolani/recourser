import { Handler } from "express";

import * as resourceDal from "../../db/dal/resource";

export const createNewResource: Handler = async (req, res, next) => {
  try {
    const result = await resourceDal.create(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};
