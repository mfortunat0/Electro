import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/uploads", express.static("uploads"));

app.listen(3001, () => console.log("Server running"));
