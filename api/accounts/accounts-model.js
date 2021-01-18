const db = require("../../data/dbConfig")

module.exports = {
  findAll,
  findById,
}

function findAll() {
  // SELECT * FROM accounts
  return db("accounts")
}

function findById(id) {
  // SELECT * FROM accounts WHERE id = id
  // return db("accounts").where('id', id).first()
  return db("accounts").where({ id }).first()
}
