import express from "express";

const app = express();

app.get("/", (request, response) => response.send("Olá mundo"));
app.listen(3333);
