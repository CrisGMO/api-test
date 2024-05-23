import express from 'express'
import { Search } from "js-search"

import foto, { map } from "./foto.json"

const search = new Search("name")
search.addDocuments(foto)
search.addIndex("name")

app.get("/api/foto", (req, res) => {
  const { query } = req

  try {
    const breed = query.search

    if (breed) {
      res.send(search.search(breed))
    }
    res.send(map((b) => ({ name: b })))
  } catch (error) {
    console.log("error", error)
  }
})

app.get("/api/foto/:id", (req, res) => {
  const { id } = req.params
  res.send(foto[id])
})

export default app
