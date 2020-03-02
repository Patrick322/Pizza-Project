
//constractor
function order(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;

    this.price = 0;

}
//declaring
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaTopping = ["Onion", "Sausage", "Bacon"];
//condition
order.prototype.cost = function () {
    if (this.size === pizzaSize[0]) {
        this.price += 599;
    }
    else if (this.size === pizzaSize[1]) {
        this.price += 999;
    }
    else if (this.size === pizzaSize[2]) {
        this.price += 1099;
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

    if (this.topping === pizzaTopping[0]) {
        this.price += 120;
    }
    else if (this.topping === pizzaTopping[1]) {
        this.price += 160;
    }
    else if (this.topping === pizzaTopping[2]) {
        this.price += 190;
    }

    return this.price;

} 

var finalCharge = [];
order.prototype.total= function(){
    var Total = 0;
    for (var order = 0; order < finalCharge.length; order ++) {
        Total += finalCharge[order];
    }
    return Total;
}

$(document).ready(function () {
    $("#totalCost").click(function (event) {
        event.preventDefault();
        var sizes = $("select#size").val();
        var crusts = $("select#crust").val();
        var toppings = $("select#topping").val();

        var newOrder = new order(sizes, crusts, toppings);
        newOrder.cost();
        finalCharge.push(newOrder.price);


        $("#pz").text(sizes);
        $("#cr").text(crusts);
        $("#to").text(toppings);
        $("#tc").text(newOrder.total());


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