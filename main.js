var coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 21 },
    americano: { beanRequirement: 5, price: 11 },
    doubleShot: { beanRequirement: 15, price: 31 },
    frenchPress: { beanRequirement: 12, price: 25 }
  },

  makeDrink: function (drinkType) {
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      alert("Sorry, we don't make " + drinkType);
    } else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert("Sorry, we're all out of beans!");
    } else {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      alert("Enjoy your " + drinkType + ", we have " + this.beans + "beans more.");
    }
  },

  buySupplies: function (amountOfBeans) {
    if (this.money >= amountOfBeans * 2) {
      this.beans += amountOfBeans;
      this.money -= amountOfBeans * 2;
      alert("You've bought " + amountOfBeans + " beans. Money balance: " + this.money);
      return;
    }
    alert("Mind the price 2 shekels per bean. Your balance is not enough: " + this.money);
  },

  buyDrink: function (drinkType) {
    if (!drink in this.drinkRequirements) {
      alert("Sorry, we don't make " + drinkType);
    } else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert("Sorry, we're all out of beans!");
    } else {
      this.money += this.drinkRequirements[drinkType].price;
      this.makeDrink(drinkType);
      alert("Money balance: " + this.money + "; Bean balance: " + this.beans);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(10);
coffeeShop.buySupplies(55);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");