import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "../../config";

interface ResourceDataAttributes {
  id: number;
  url: string;
  creator_id: number;
  length: number;
  name: string;
  type: string;
  tag: string;
}

export interface ResourceDataOutput extends Required<ResourceDataAttributes> {}

class ResourceData
  extends Model<ResourceDataAttributes>
  implements ResourceDataAttributes
{
  public id!: number;
  public url!: string;
  public creator_id!: number;
  public length!: number;
  public name!: string;
  public type!: string;
  public tag!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ResourceData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
    },
    creator_id: {
      type: DataTypes.INTEGER,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    tag: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "resource_data",
    sequelize: sequelizeConnection,
  }
);

export default ResourceData;

// the view query

// create view resource_data as
// WITH count_types AS
// 	(SELECT recourse_id, type_name, Count(*)
//        FROM "ResourceTypeSuggestions" rts
//       GROUP BY rts.recourse_id, rts.type_name),
//       count_tags AS
// 	(SELECT recourse_id, tag_name, sum(rank)
//        FROM "ResourceTagSuggestions" rts
//       GROUP BY rts.recourse_id, rts.tag_name)
// select id, url, creator_id, "createdAt", "updatedAt", rl.avg_length length,rn.name, rtypes.type_name type, rtags.tag_name tag from "Resources" r
// 	join (select recourse_id, avg(length) avg_length from "ResourceLengthSuggestions" rls
// 			group by rls.recourse_id) rl on rl.recourse_id = r.id
// 	join (select recourse_id, max(name) name from "ResourceNameSuggestions" rns
// 			group by rns.recourse_id) rn on rn.recourse_id = r.id
// 	join (SELECT recourse_id, type_name
//   FROM (SELECT recourse_id, type_name, approved,
//                Rank () OVER (partition BY recourse_id ORDER BY approved DESC, count DESC) rank
//           FROM count_types
//           JOIN "ResourceTypes" rt
//             ON count_types.type_name = rt.NAME) ranked
//  WHERE ranked.rank = 1) rtypes on rtypes.recourse_id = r.id
// 	join (SELECT recourse_id, tag_name
//   FROM (SELECT recourse_id, tag_name, approved,
//                Rank () OVER (partition BY recourse_id ORDER BY approved DESC, sum DESC) rank
//           FROM count_tags
//           JOIN "ResourceTags" rt
//             ON count_tags.tag_name = rt.NAME) ranked
//  WHERE ranked.rank = 1) rtags on rtags.recourse_id = r.id;
