/* eslint-disable global-require */
/* eslint-disable no-console */

import path from "path";
import next from "next";
import nextBuild from "next/dist/build";

import { config as dotenv } from "dotenv";

import express from "express";
import payload from "payload";

const app = express();
app.use('/media', express.static(path.resolve(__dirname, '../media')));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));
dotenv({
  path: path.resolve(__dirname, "../.env"),
});

const dev = process.env.NODE_ENV !== "production";

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET_KEY,
    mongoURL: process.env.MONGO_URL,
    express: app,
  })

  if (!process.env.NEXT_BUILD) {
    const nextApp = next({ dev });

    const nextHandler = nextApp.getRequestHandler();

    app.get("*", (req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
      console.log("NextJS started");

      app.listen(process.env.PORT, async () => {
        console.log(`Server listening on ${process.env.PORT}...`);
      });
    });
  } else {
    app.listen(process.env.PORT, async () => {
      console.log("NextJS is now building...");
      await nextBuild(path.join(__dirname, "../"));
      process.exit();
    });
  }
};

start();

