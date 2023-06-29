class UserController {
	calculateTax(req, res) {
		const { amount } = req.body;
		const tax = amount * 0.16;
		res.json({ ok: true, data: { tax } });
	}
}

export default new UserController();
