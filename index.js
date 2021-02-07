const app = require("express")();

const port = 3001;

app.get("/", (req, res) => {
	res.send("hello from Docker container");
});
app.listen(port, () => {
	console.log(`app is listening at http://localhost:${port}`);
});
