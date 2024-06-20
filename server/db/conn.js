const mongoose = require("mongoose");

const DB =
  "mongodb+srv://harsh609:1234@project.6px6x.mongodb.net/googleLogin?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log("errr", err));
