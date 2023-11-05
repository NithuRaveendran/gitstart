const product=[];

module.exports = class product {
constructor(t) {
    this.title = t
}
save() {
    product.push(this);
}
static fetchAll () {
    return product;
}

}