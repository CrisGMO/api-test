import app from 'express'
import { Search } from "js-search"

// import foto, { map } from "./fotos.json"

const foto = require("./fotos.json")

const search = new Search("name")
search.addDocuments(foto)
search.addIndex("name")

app.get("/api/foto", (req, res) => {
  const { query } = req

  try {
    const foto = query.search

    if (foto) {
      res.send(search.search(breed))
    }
    res.send(map((f) => ({ name: f })))
  } catch (error) {
    console.log("error", error)
  }
})

app.get("/api/foto/:id", (req, res) => {
  const { id } = req.params
  res.send(foto[id])
})

export default app
