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