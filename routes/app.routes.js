import express from "express";
import userController from "../controllers/user.controller.js";
class AppRoutes {
	routes(app = express.application) {
		app.get("/hello", (req, res) => {
			res.json({
				message: "Hi broda",
			});
		});
		app.post("/calculate_tax", userController.calculateTax);
	}
}

export { AppRoutes };
