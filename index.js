const express = require("express");
const app = express();
const port = 3000;
app.get("/hello", (req, res) => {
	res.json({
		message: "Hi broda",
	});
});
app.get("**", (req, res) => {
	res.json({
		message: "Not Found, please be nice and get out of here",
	});
});

app.listen(port, () => {
	console.log(`Starting server on localhost:${port}`);
});
