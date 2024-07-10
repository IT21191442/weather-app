require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const routes = require("./routes");
const { sendWeatherReports } = require("./services/weatherService");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api", routes);

// Schedule weather reports every 3 hours
cron.schedule("0 */3 * * *", sendWeatherReports);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
