import express from "express";

const app = express();

app.get("/ads", (req, res) => {});

app.listen(3333, () => {
  console.log("Servidor rodando");
});
