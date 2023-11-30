// index.js

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 7777; // Ganti hardcoded port dengan variabel

app.use(cors());
app.use(express.json());

const router = require("./routes/index");
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
