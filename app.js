const dotenv = require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const sendEmail = require("./utils/sendEmail");

const app = express();
// const router = express.Router();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// get routes for aigo database
app.use("/aigo", tasks);

// get routes home, captcha, sendemail
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/captcha", (req, res) => {
  res.send("Captcha Verification Page");
});

app.get("/sendemail", (req, res) => {
  res.send("Send Email Page");
});

//captcha POST route
app.post("/captcha", async (req, res) => {
  ////Destructuring response token and input field value from request body
  const { token } = req.body;

  try {
    // Sending secret key and response token to Google Recaptcha API for authentication.
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    );

    // Check response status and send back to the client-side
    if (response.data.success) {
      res.send("Human 👨 👩");
    } else {
      res.send("Robot 🤖");
    }
  } catch (error) {
    // Handle any errors that occur during the reCAPTCHA verification process
    console.error(error);
    res.status(500).send("Error verifying reCAPTCHA");
  }
});

// Send email post route
app.post("/sendemail", async (req, res) => {
  try {
    await sendEmail(req, res);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

// start function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server is listening on port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
