const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Backend is working");
});
