const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.post("/hello", (req, res) => {
  return res.json({ data: "Hello World" });
});

// Request Handler
app.post("/login", async (req, res) => {
  // get request input
  const { input } = req.body.input;

  // run some business logic

  /*
  // In case of errors:
  return res.status(400).json({
    message: "error happened"
  })
  */

  // success
  return res.json({
    accessToken: input.username,
  });
});

app.listen(PORT);
