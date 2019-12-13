class DrugItem {

  constructor({ id, owner, title, img, price, from, volume, stars } = {}) {

    /** @type {Number} */
    this.id = id;

    /** @type {String} */
    this.owner = owner;

    /** @type {String} */
    this.title = title;

    /** @type {String} */
    this.img = img;

    /** @type {Number} */
    this.price = price;

    /** @type {String} */
    this.from = from;

    /** @type {String} */
    this.volume = volume;

    /** @type {Number} */
    this.stars = stars;
  }
}

export default DrugItem;
