import mongoose from "mongoose";
import { PORT_DB } from "./config.js";
const uri = `mongodb://34.199.33.217:${PORT_DB}/db_Nition`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", (_) => {
  console.log("Database is connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

export default mongoose;

