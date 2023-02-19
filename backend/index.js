//mongodb+srv://Metalax:VJbgkRTCD6CzP3sS@gofi-cluster.qxrgocw.mongodb.net/?retryWrites=true&w=majority

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnect = require("./Functions/databaseConnect");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8000;

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// execute database connection
dbConnect();

// Routes/Endpoints
app.use("/api", apiRoutes);
