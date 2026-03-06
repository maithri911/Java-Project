function generateBill(){

let price = 0
let bill = ""

let type = document.getElementById("pizzaType").value

if(type == "veg"){
price = 300
bill += "Veg Pizza: 300 <br>"
}
else{
price = 400
bill += "Non Veg Pizza: 400 <br>"
}

if(document.getElementById("cheese").checked){
price += 100
bill += "Extra Cheese: 100 <br>"
}

if(document.getElementById("toppings").checked){
price += 150
bill += "Extra Toppings: 150 <br>"
}

if(document.getElementById("takeaway").checked){
price += 20
bill += "Take Away: 20 <br>"
}

bill += "<b>Total Bill: " + price + "</b>"

document.getElementById("bill").innerHTML = bill
}