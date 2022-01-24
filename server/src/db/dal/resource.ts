import {
  Resource,
  ResourceLengthSuggestion,
  ResourceLengthSuggestionInput,
  ResourceLengthSuggestionOutput,
  ResourceNameSuggestion,
  ResourceNameSuggestionInput,
  ResourceNameSuggestionOutput,
  ResourceTag,
  ResourceTagInput,
  ResourceTagOutput,
  ResourceTagSuggestion,
  ResourceTagSuggestionInput,
  ResourceTagSuggestionOutput,
  ResourceType,
  ResourceTypeInput,
  ResourceTypeOutput,
  ResourceTypeSuggestion,
  ResourceTypeSuggestionInput,
  ResourceTypeSuggestionOutput,
} from "../models/Resource";

export const create = async (
  url: string,
  creator_id: number,
  name: string,
  length: number,
  tags: { name: string; rank: number }[],
  type: string
): Promise<any> => {
  console.log(url);
  const resource = await Resource.create({ url, creator_id });
  const recourse_id = resource.getDataValue("id");
  await addResourceLength({
    recourse_id,
    length,
    user_id: creator_id,
  });
  await addResourceName({
    recourse_id,
    name,
    user_id: creator_id,
  });
  await Promise.all(
    tags.map(async ({ rank, name }) => {
      //TODO only if not exists
      await createResourceTag({
        name,
      });
      await addResourceTagSuggestion({
        tag_name: name,
        recourse_id,
        user_id: creator_id,
        rank,
      });
    })
  );
  //TODO only if not exists
  await createResourceType({
    name: type,
  });
  await addResourceTypeSuggestion({
    type_name: type,
    recourse_id,
    user_id: creator_id,
  });
  return resource;
};

export interface ResourceViewOutput {}

// export const getAll = async (): Promise<UserOutput[]> => {
//   return User.findAll({
//     where: {
//       ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
//     },
//     ...((filters?.isDeleted || filters?.includeDeleted) && {
//       paranoid: true,
//     }),
//   });
// };

export const createResourceType = async (
  payload: ResourceTypeInput
): Promise<ResourceTypeOutput> => {
  return await ResourceType.create(payload);
};

export const addResourceTypeSuggestion = async (
  payload: ResourceTypeSuggestionInput
): Promise<ResourceTypeSuggestionOutput> => {
  return await ResourceTypeSuggestion.create(payload);
};

export const createResourceTag = async (
  payload: ResourceTagInput
): Promise<ResourceTagOutput> => {
  return await ResourceTag.create(payload);
};

export const addResourceTagSuggestion = async (
  payload: ResourceTagSuggestionInput
): Promise<ResourceTagSuggestionOutput> => {
  return await ResourceTagSuggestion.create(payload);
};

export const addResourceName = async (
  payload: ResourceNameSuggestionInput
): Promise<ResourceNameSuggestionOutput> => {
  return await ResourceNameSuggestion.create(payload);
};

export const addResourceLength = async (
  payload: ResourceLengthSuggestionInput
): Promise<ResourceLengthSuggestionOutput> => {
  return await ResourceLengthSuggestion.create(payload);
};
