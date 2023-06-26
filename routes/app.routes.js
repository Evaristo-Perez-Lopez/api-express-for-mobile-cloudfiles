import express from "express";

class AppRoutes {
	routes(app = express.application) {
		app.get("/hello", (req, res) => {
			res.json({
				message: "Hi broda",
			});
		});
		app.get("/calculate_tax", (req, res) => {
			const { amount } = req.body;
			const tax = amount * 0.16;
			res.json({ ok: true, data: { tax } });
		});
	}
}

export { AppRoutes };
