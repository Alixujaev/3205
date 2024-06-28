import express from 'express';
import * as dotenv from 'dotenv';
import cors from "cors"
import UserRoutes from "./routes/user"


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: 'http://localhost:5173', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(UserRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
})


app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT} 🚀`);
});


