const dotenv = require("dotenv");

const express = require("express");
const app = express();
const helmet = require("helmet");

dotenv.config();
const port = process.env.PORT;

const mongoose = require("mongoose");

const homeRouter = require("./routes/home");
const productRouter = require("./routes/product");

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRouter);
app.use("/", homeRouter);

async function startServerHandler() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected.");

    const server = app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });

    const shutdownHandler = async () => {
      try {
        await mongoose.connection.close();
        console.log("connection closed.");

        server.close(() => {
          console.log("server closed");
          process.exit(0);
        });
      } catch (error) {
        console.error("server closed failed.", error);
        process.exit(1);
      }
    };

    process.on("SIGINT", shutdownHandler);
    process.on("SIGTERM", shutdownHandler);
  } catch (error) {
    console.error("connection failed.", error);
    process.exit(1);
  }
}

startServerHandler();
