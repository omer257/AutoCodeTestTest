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

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");