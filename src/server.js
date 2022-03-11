import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 5293;
const app = express();
// 여부터
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
// 여 사이에 뭔가 들어간다.
const handleListening = () => {
  console.log(`Lisening On http://localhost:${PORT} 😜`);
};
app.listen(PORT, handleListening);
