import express from "express";
import morgan from "morgan";

const PORT = 5293;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.get("/", (req, res) => res.send("Hello~, World"));

const handleListening = () => {
  console.log(`Lisening On http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
