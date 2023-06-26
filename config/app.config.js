import express from "express";
import { AppRoutes } from "../routes/app.routes.js";
class App {
	app = null;
	appRoutes = new AppRoutes();
	constructor() {
		this.initializeApp();
	}
	initializeApp() {
		this.app = express();
		this.config();
	}
	config() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.appRoutes.routes(this.app);
	}
}

export default new App();
