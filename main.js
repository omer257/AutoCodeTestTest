var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    for (drink in this.drinkRequirements) {
      if (drink === drinkType) {
        while (this.beans >= this.drinkRequirements[drinkType]) {
          this.beans -= this.drinkRequirements[drinkType];
          console.log(this.beans);
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
  while(this.money >= amountOfBeans*2) {
    this.beans += amountOfBeans;
    this.money -= amountOfBeans*2;
    alert("You've bought " + amountOfBeans + " beans. Money balance: " + this.money);
    return;
  }
  alert("Mind the price 2 shekels per bean. Your balance is not enough: " + this.money);
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");

coffeeShop.buySupplies(10);
coffeeShop.buySupplies(55);
console.log(coffeeShop);