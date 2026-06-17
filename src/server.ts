import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import { createClient } from "redis";

// redis.ts
const redis = createClient({
  url: process.env.REDIS_URL,
});

const connectRedis = async () => {
  await redis.connect();
  console.log("Redis Conneted");
};

connectRedis();

// server.ts

app.post("/redis", async (req: Request, res: Response) => {
  // String er part
  // const name = await redis.get("name");
  // console.log(name);

  // HASH -> object
  // await redis.hSet("user:1", {
  //   name: "Naim",
  //   age: 21,
  //   city: "Dhaka",
  // });

  // const user = await redis.hGetAll("user:1");
  // console.log(user);

  // LIST --> like array

  // await redis.lPush("task2", "Learning Nest.js");
  // await redis.rPush("task2", "Learning Python");

  // const task2 = await redis.lRange("task2", 0, -1);
  // console.log(task2);

  // SET --> Unique value
  // await redis.sAdd("mySkills", ["Node.js", "Redis", "Redis"]);

  const mySkills = await redis.sMembers("mySkills");
  console.log(mySkills);

  res.send("Job submitted");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
