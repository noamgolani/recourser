import User from "./models/User";
import {
	Recourse,
	RecourseView,
	RecourseNameSuggestion,
	RecourseLengthSuggestion,
	RecourseTag,
	RecourseTagSuggestion,
	RecourseType,
} from "./models/Recourse";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
	User.sync({ alter: isDev });

	// Recourse sync
	Recourse.sync({ alter: isDev });
	RecourseView.sync({ alter: isDev });
	RecourseNameSuggestion.sync({ alter: isDev });
	RecourseLengthSuggestion.sync({ alter: isDev });

	RecourseTag.sync({ alter: isDev });
	RecourseTagSuggestion.sync({ alter: isDev });

	RecourseType.sync({ alter: isDev });
};

export default dbInit;
