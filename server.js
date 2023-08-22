const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const theTasks = require("./routes/taskRouter");
const theCategories = require("./routes/categoryRouter");
const connectDB = require("./database/connect");
const userIDMiddleware = require("./middleware/userID");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("brows stick");
});
app.use(
  express.static(
    path.join(__dirname, "frontend", "Browser-Stickies-Frontend", "build")
  )
);
app.use(express.json());
app.use(cors());
app.use(userIDMiddleware);
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "frontend",
      "Browser-Stickies-Frontend",
      "index.html"
    )
  );
});

app.use("/api/v1/theTasks", theTasks);
app.use("/api/v1/theCategories", theCategories);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("The server serves. yaas.");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
