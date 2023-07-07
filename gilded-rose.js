// Item class (do not touch)
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    // if the sell-in date is lower than 0, quality degrades twice as fast
    if (this.sellIn < 0) { this.quality -= 2; }

    // otherwise, it degrades normally
    else { this.quality--; }

    // quality cannot go below 0
    if (this.quality < 0) { this.quality = 0; }

    // quality can't be over 50
    if (this.quality > 50) { this.quality = 50; }

    // the sell-in date always degrades
    this.sellIn--;
  }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    // does nothing, since sellIn/quality doesn't change for legendary items
  }
}

export class Aged extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    // if sellIn date is more than 0, increase quality by 1
    if (this.sellIn > 0) { this.quality++; }

    // otherwise, increase quality by 2
    else { this.quality += 2; }

    // quality can't be over 50
    if (this.quality > 50) { this.quality = 50; }

    // decrease sellIn date by 1
    this.sellIn--;
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  update() {
    // if the sell-in date is lower than 0, quality degrades quadrice as fast
    if (this.sellIn < 0) { this.quality -= 4; }

    // otherwise, it degrades twice as fast
    else { this.quality -= 2; }

    // quality cannot go below 0
    if (this.quality < 0) { this.quality = 0; }

    // the sell-in date always degrades
    this.sellIn--;
  }
}

export class Ticket extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  update() {
    // if the concert has passed, quality becomes 0
    if (this.sellIn < 0) { this.quality = 0; }

    // if there are less than 5 days left, quality increases by 3
    else if (this.sellIn < 5) { this.quality += 3; }

    // if there are less than 10 days left, quality increases by 2
    else if (this.sellIn < 10) { this.quality += 2; }

    // otherwise, quality increases by 1
    else { this.quality++; }

    // quality can't be above 50
    if (this.quality > 50) { this.quality = 50; }

    // sellIn decreases as normal
    this.sellIn--;
  }
}

// items array (do not touch)
export let items = [];

// Initial seed for items array
items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Aged("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

// the main updateQuality function
export const updateQuality = () => {
  for (let item of items) {
    item.update();
  }
};
