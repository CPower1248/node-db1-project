const db = require("../../data/dbConfig")

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
}

function findAll() {
  // SELECT * FROM accounts
  return db("accounts")
}

function findById(id) {
  // SELECT * FROM accounts WHERE id={id}
  // return db("accounts").where('id', id).first()
  return db("accounts").where({ id }).first()
}

function insert(body) {
  // INSERT INTO accounts (name, budget) VALUES ({body})
  return db("accounts").insert(body)
    .then(([id]) => {
      return db("accounts").where({ id }).first()
    })
}

function update(id, body) {
  // UPDATE accounts SET name={body.name}, budget={body.budget} WHERE id={id}
  return db("accounts").where({ id }).update(body)
    .then(([id]) => {
      return db("accounts").where({ id }).first()
    })
}

function remove(id) {
  // DELETE FROM accounts WHERE id={id}
  return db("accounts").where({ id }).delete()
}
