const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const exphbs = require("express-handlebars");
const todoRoutes = require("./routes/todos");

const PORT = process.env.POST || 5000;
const connect = "";

const app = express();
const hbs = exphbs.create({
	defaultLayout: "main",
	extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use(todoRoutes)

const start = async function () {
	try {
		await mongoose.connect(connect, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		app.listen(PORT, function () {
			console.log("Server has been started...");
			console.log(`http://localhost:${PORT}/`)
		});
	} catch (error) {
		console.log(error)
	}
}
start();

