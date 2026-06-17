import express, { Request, Response } from "express";

const app = express();

// app.post("/redis", async (req: Request, res: Response) => {
//   res.send("Job submitted");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
