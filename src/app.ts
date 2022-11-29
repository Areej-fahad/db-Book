import { z } from "zod";
import  Express  from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db";

const app= Express();

connectDB();

const port= 5000
app.use(Express.json());

app.listen(port, () => {

    console.log(`Server is running in ${port}`);
});

