import User from "./models/User";
import {
	Recourse,
	RecourseView,
	RecourseNameSuggestion,
} from "./models/Recourse";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
	User.sync({ alter: isDev });

	// Recourse sync
	Recourse.sync({ alter: isDev });
	RecourseView.sync({ alter: isDev });
	RecourseNameSuggestion.sync({ alter: isDev });
};

export default dbInit;
