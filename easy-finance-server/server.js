const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../easy-finance-client/build")));
  app.get("/*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../easy-finance-client/build/index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
