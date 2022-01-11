import User from "./models/User";
import { Recourse } from "./models/Recourse";

const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
	User.sync({ alter: isDev });
	Recourse.sync({ alter: isDev });
};

export default dbInit;
