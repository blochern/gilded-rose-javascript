// import dependencies
import { expect, describe, it } from "vitest";
import { items, Basic, Legendary, Alcohol, Conjured, Ticket, updateQuality } from "./gilded-rose.js";

// One big test
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();
    console.log(testItem.constructor.name);

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("increases the quality of 'Aged Brie' by 1", () => {
    const testBrie = new Alcohol("Aged Brie", 10, 15);
    items.push(testBrie);

    updateQuality();

    expect(testBrie.quality).toBe(16);
    expect(testBrie.sellIn).toBe(9);
  });

  it("Sulfuras, Hand of Ragnaros' sellIn and quality never decreases", () => {
    const testLegendary = new Legendary("Sulfuras, Hand of Ragnaros", 3, 9);
    items.push(testLegendary);

    updateQuality();

    expect(testLegendary.sellIn).toBe(3);
    expect(testLegendary.quality).toBe(9);
  });

  it("Conjured items' quality decreases twice as fast", () => {
    const testConjured = new Conjured("Conjured Beer", 3, 8);
    items.push(testConjured);

    updateQuality();

    expect(testConjured.sellIn).toBe(2);
    expect(testConjured.quality).toBe(6);
  });

  it("Ticket items' quality increases by 1 if sellIn is greater than 10", () => {
    const testTicket = new Ticket("Test ticket 1", 11, 10);
    items.push(testTicket);

    updateQuality();

    expect(testTicket.sellIn).toBe(10);
    expect(testTicket.quality).toBe(11);
  });

  it("Ticket items' quality increases by 2 if sellIn is less than 10", () => {
    const testTicket = new Ticket("Test ticket 3", 9, 15);
    items.push(testTicket);

    updateQuality();

    expect(testTicket.sellIn).toBe(8);
    expect(testTicket.quality).toBe(17);
  });

  it("Ticket items' quality increases by 3 if sellIn is less than 5", () => {
    const testTicket = new Ticket("Test ticket 3", 3, 20);
    items.push(testTicket);

    updateQuality();

    expect(testTicket.sellIn).toBe(2);
    expect(testTicket.quality).toBe(23);
  });

  it("Ticket items' quality becomes 0 after its sellIn becomes less than 0", () => {
    const testTicket = new Ticket("Test ticket 4", -2, 15);
    items.push(testTicket);

    updateQuality();

    expect(testTicket.sellIn).toBe(-3);
    expect(testTicket.quality).toBe(0);
  });
});