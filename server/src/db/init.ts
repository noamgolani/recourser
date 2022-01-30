import User from "./models/User";
import {
  Resource,
  ResourceView,
  ResourceNameSuggestion,
  ResourceLengthSuggestion,
  ResourceTag,
  ResourceTagSuggestion,
  ResourceType,
  ResourceTypeSuggestion,
  ResourceData,
} from "./models/Resource";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  User.sync({ alter: isDev });

  ResourceData.sync();

  // Resource sync
  Resource.sync({ alter: isDev });
  ResourceView.sync({ alter: isDev });
  ResourceNameSuggestion.sync({ alter: isDev });
  ResourceLengthSuggestion.sync({ alter: isDev });

  ResourceTag.sync({ alter: isDev });
  ResourceTagSuggestion.sync({ alter: isDev });

  ResourceType.sync({ alter: isDev });
  ResourceTypeSuggestion.sync({ alter: isDev });
};

export default dbInit;
