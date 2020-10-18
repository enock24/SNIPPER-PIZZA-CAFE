$(document).ready(function() {
    $("#pick-up").click(function(event) {
      var flavour = $("#pizzaflavour :selected");
      var size = $("#pizzasize :selected");
      var crust = $("#pizzacrust :selected");
      var topping = $("#pizzatopping :selected");
      var number = $("#number");
  
      getPick(flavour, size, crust, topping, number);
      event.preventDefault();
    });
  });
  var pizzaFlavour = ["Berry", "Butternut Squash", "Chicken", "Humus", "Turkish Ground"];
  var pizzaSize = ["Regular", "Medium", "Large"];
  var pizzaCrust = ["Thin crust", "Thick crust", "Deep crust", "Stuffed crust"];
  var pizzaTopping = ["Onion", "Mushroom", "bacon", "black olives"];
  