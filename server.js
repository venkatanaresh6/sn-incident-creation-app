require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// API to create incident
app.post("/create-incident", async (req, res) => {
  try {
    const response = await axios.post(
      "https://dev343547.service-now.com/api/now/table/incident",
      {
        short_description: req.body.short_description,
        description: req.body.description
      },
      {
        auth: {
        username: process.env.SN_USERNAME,
        password: process.env.SN_PASSWORD
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send("Error creating incident");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});