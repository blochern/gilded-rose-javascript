// import dependencies
import { expect, describe, it } from "vitest";
import { items, Basic, Legendary, Alcohol, Conjured, Ticket, updateQuality } from "./gilded-rose.js";

// basic updateQuality function that reduces quality and sellIn of basic items
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();
    console.log(testItem.constructor.name);

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

// Aged Brie quality should increase by 1
describe("updateQuality", () => {
  it("increases the quality of 'Aged Brie' by 1", () => {
    const testBrie = new Alcohol("Aged Brie", 10, 15);
    items.push(testBrie);

    updateQuality();

    expect(testBrie.quality).toBe(16);
    expect(testBrie.sellIn).toBe(9);
  });
});

// Sulfuras, Hand of Ragnaros' sellIn and quality never decreases
describe("updateQuality", () => {
  it("")
})