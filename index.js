import Api from "./config/app.config.js";
const port = 3000;
Api.app.listen(port, () => {
	console.log(`Starting server on localhost:${port}`);
});

// import express from "express";

// const app = express();
// const port = 3000;

// // midlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // routes
// app.get("/hello", (req, res) => {
// 	res.json({
// 		message: "Hi broda",
// 	});
// });

// app.get("/calculate_tax", (req, res) => {
// 	const { amount } = req.body;
// 	const tax = amount * 0.16;
// 	res.json({ ok: true, data: { tax } });
// });

// app.get("**", (req, res) => {
// 	res.json({
// 		message: "Not Found, please be nice and get out of here",
// 	});
// });

// app.listen(port, () => {
// 	console.log(`Starting server on localhost:${port}`);
// });
