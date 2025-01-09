"use strict";

const { resolve } = require("node:path");
const express = require("express");

// Resolve the path to the 'dist' directory, one level up from the current directory
const uvPath = resolve(__dirname, "..", "dist");

// Initialize Express app
const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(uvPath));

// Start the server on port 5532
app.listen(5522, () => {
  console.log('Server running on http://localhost:5522');
});
