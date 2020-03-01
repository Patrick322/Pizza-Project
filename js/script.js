var totalCosts = [];

function order(size, crust, Topping) {
    this.size = size;
    this.crust = crust;
    this.Topping = Topping;
    this.price = 0;

}
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Onion", "Sausage", "Becon",];

order.prototype.cost = function () {
    if (this.size === pizzaSize[0]) {
        this.price += 500;
    }
    else if (this.size === pizzaSize[1]) {
        this.price += 900;
    }
    else if (this.size === pizzaSize[2]) {
        this.price += 1200;
    }

    if (this.crust === pizzaCrust[0]) {
        this.price += 120;
    }
    else if (this.crust === pizzaCrust[1]) {
        this.price += 160;
    }
    else if (this.crust === pizzaCrust[2]) {
        this.price += 200;
    }

    if (this.Topping === pizzaTopping[0]) {
        this.price += 120;
    }
    else if (this.Topping === pizzaTopping[1]) {
        this.price += 160;
    }
    else if (this.Topping === pizzaTopping[2]) {
        this.price += 190;
    }

    return this.price;

}
order.prototype.totalCost = function () {
    var orderTotal = 0;
    for (var order = 0; order < totalCosts.length; order++) {
        orderTotal += totalCosts[order];
    }
    return orderTotal;
}

$(document).ready(function () {
    $("#totalCost").click(function (event) {
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var Toppings = $("select#topping").val();

        var newPizzaOrder = new order(sizes, crusts, Toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);


        $("#pz").text(sizes);
        $("#cr").text(crusts);
        $("#to").text(Toppings);
        $("#tc").text(newPizzaOrder.totalCost());


    });

});
           
        $("#delivery").click(function () {
           prompt("please fill in your location")
             prompt("please enter your your Phone number")
            alert("Your pakage will arrive soon!")
             alert("Your delivery cost is ksh.150")
        });

        $("#pick").click(function () {
           alert("please visit our nearest branch near you to pick up your package!!")
  });
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })