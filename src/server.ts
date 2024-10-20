import { prisma } from "../prisma";
import { app } from "./app";

async function connectToDatabase() {
   try {
      await prisma.$connect();
      console.log("🎲 Connected to database");
   } catch (error) {
      console.error("❌ Failed to connect to database", error);
   }
}

async function startServer() {
   await connectToDatabase();

   app.listen(3000, () => {
      console.log("🚀 Server started on port 3000");
   });

}

startServer()