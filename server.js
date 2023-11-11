const express = require(`express`);
const fs = require(`fs`);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (connects files together)
app.use(express.static(`public`));

// Middleware to recieve body data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// import all routes
const allRoutes = require(`./controllers`);
app.use(allRoutes);

// run app in the specified PORT
app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});