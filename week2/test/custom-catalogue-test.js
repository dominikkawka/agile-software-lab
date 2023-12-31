const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0)
const p128 = new Product("A128", "Another Product 3", 100, 10, 10.0);

const p130 = new Product("A130", "asda", 10, 10, 10.0);
const p131 = new Product("A131", "basda", 8, 10, 10.0);
const p132 = new Product("A132", "casda", 100, 90, 10.0);
const p133 = new Product("A132", "dasda", 100, 110, 10.0);
let response

console.log('Test addProduct')
console.log("\tWhen we add a product, then it will return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen we add a product whose id matches an existing one, then it will return false")
response = cat.addProduct(new Product("A123", "Product X", 100, 10, 10.0));
// Expectation
if (response === false)
  console.log('\tPassed')
else
  console.log('\tfailed')
//================================

cat = new Catalogue("Test Catalogue");
console.log('Test findProductByNameLike')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let substring = "Product";
console.log("\tGiven the catalogue has some products, when we provide a substring that has matches, then it returns the correct products")
let matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length !== 3)
  console.log('\tFailed')
if (matches[0].name === p123.name && matches[1].name === p125.name && matches[2].name === p128.name)
  console.log('\tPassed')
else
  console.log('\tFailed')

substring = "No match";
console.log("\tGiven the catalogue has some products, when we provide a substring that has no matches, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

cat = new Catalogue("Test Catalogue");
substring = "Product";
console.log("\tGiven the catalogue is empty, when we provide a substring, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

//================================

cat = new Catalogue("Test Catalogue");
console.log('Test removeProductById')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);

console.log("\tdelete existing item 'A123'")
response = cat.removeProductById("A123")

if (response === true) {
  console.log('\tPassed')
} else {
  console.log('\tFailed')
}

console.log("\tdelete non-existing item attempt")
response = cat.removeProductById("NOT A REAL ID")
if (response === false) {
  console.log('\tPassed')
} else {
  console.log('\tFailed')
}

//================================

cat = new Catalogue("Test Catalogue");
check = cat.checkReorder()
result = { type: 'reorder', productIds: [] }
console.log('Test checkReorder')
console.log('\t no products need reordering, returning an empty array')
cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);

//console.log(check)
if (check = result) {
  console.log('\tPassed')
} else {
  console.log('\tFailed')
}

console.log('\treordering products')
cat = new Catalogue("Test Catalogue");
check = cat.checkReorder()
result = ({type:'reorder', productIds:['A130','A131','A133']})

cat.addProduct(p130)
cat.addProduct(p131)
cat.addProduct(p132)

//console.log(check)
if (check = result) {
  console.log('\tPassed')
} else {
  console.log('\tFailed')
}