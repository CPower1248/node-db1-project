const express = require("express")
const Account = require("./accounts-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const data = await Account.findAll()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await Account.findById(id)
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.use((error, req, res, next) => {
  res.status(500).json({ 
    error: "There was a problem communicating with the server",
    message: error.message,
    stack: error.stack
  })
})

module.exports = router
