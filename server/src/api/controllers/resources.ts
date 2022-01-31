import { Handler } from "express";

import * as resourceDal from "../../db/dal/resource";

export const getAllResources: Handler = async (req, res, next) => {
  try {
    res.send(await resourceDal.getAll());
  } catch (error) {
    next(error);
  }
};

export const createNewResource: Handler = async (req, res, next) => {
  try {
    const { url, creator_id, length, name, tags, type } = req.body;
    const result = await resourceDal.create(
      url,
      creator_id,
      name,
      length,
      tags,
      type
    );
    res.send(result);
  } catch (error) {
    next(error);
  }
};
