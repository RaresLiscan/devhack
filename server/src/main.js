const express = require("express");
const { initMongoose } = require("./database/mongoose-init");
const { router: appRouter } = require("./routes/index");

const app = express();
app.use(express.json());
initMongoose();

app.use("/api", appRouter);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
