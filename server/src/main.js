const express = require("express");
const { initMongoose } = require("./database/mongoose-init");
const { router: appRouter } = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
initMongoose();

app.use("/api", appRouter);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
