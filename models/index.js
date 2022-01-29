// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product, {foreingnKey: 'category_id'});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {trough: 'ProductTag', foreingnKey: 'prodyct_id'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {trough: 'ProductTag', foreingnKey: 'tag_id'});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
