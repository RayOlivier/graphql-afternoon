const products = require("../models/products")

const cart = []

module.exports = {
  Query: {
    products() {
      return products
    },
    product(_, { id }) {
      console.log("id", id)
      let item = products.find((e) => e.id === id)

      if (!item) {
        throw new Error(`no product with ID: ${id}`)
      }
      return item
    },
    cart() {
      return cart
    }
  }
}
