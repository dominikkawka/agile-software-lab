class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find(
      function (product) {
        return id === product.id;
      })
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  findProductsByNameLike(subString) {
    const matches = this.products.filter(function(product) {
      const position = product.name.search(subString)
      return position !== -1
    } )
    return matches;
  }

  removeProductById(id) {
      if (this.findProductById(id)) {
      this.products.splice(id, 1)
      return true
    } else {
      return false
    }
  }

  checkReorder() {
    let reorderList = [];
    for (let i = 0; i < this.products.length; i++) {
      if(product.quantityInStock <= product.reorderLevel) {
        return reorderList.push(product.id)
      }
    }
    return {type:"reorder", productIds:reorderList}
  }
}
module.exports = Catalogue;
