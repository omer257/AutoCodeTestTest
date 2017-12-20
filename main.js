var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 21 },
    americano: { beanRequirement: 5, price: 11 },
    doubleShot: { beanRequirement: 15, price: 31 },
    frenchPress: { beanRequirement: 12, price: 25 }
  },

  makeDrink: function (drinkType) {
    for (drink in this.drinkRequirements) {
      if (drink === drinkType) {
        while (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
          this.beans -= this.drinkRequirements[drinkType].beanRequirement;
          alert("Enjoy your " + drinkType + ", we have " + this.beans + "beans more.");
          return;
        }
        alert("Sorry, we're all out of beans!");
        return;
      }
    }
    alert("Sorry, we don't make " + drinkType);
  }
}

coffeeShop.money = 100;
coffeeShop.buySupplies = function (amountOfBeans) {
  while (this.money >= amountOfBeans * 2) {
    this.beans += amountOfBeans;
    this.money -= amountOfBeans * 2;
    alert("You've bought " + amountOfBeans + " beans. Money balance: " + this.money);
    return;
  }
  alert("Mind the price 2 shekels per bean. Your balance is not enough: " + this.money);
}

coffeeShop.buyDrink = function (drinkType) {
  for (drink in this.drinkRequirements) {
    if (drink === drinkType && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
    alert("Money balance: " + this.money + "; Bean balance: " + this.beans);
    return;
    } else if (drink === drinkType) {
      alert("Sorry, we're all out of beans!");
      return;
    }
  }
  alert("Sorry, we don't make " + drinkType);
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(10);
coffeeShop.buySupplies(55);
console.log(coffeeShop);

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");