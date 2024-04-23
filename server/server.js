const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

if (process.env.NODE_ENV === "development") {
  //get files from src during dev
  app.use(express.static(path.resolve(__dirname, "../src")));
} else {
  //get files from dist during production
  app.use(express.static(path.resolve(__dirname, "../dist")));
}

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
