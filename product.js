let products = [{name:"Creme Brulee ",price:0.500},
{name:"White Choco Orea",price:0.750},
{name:"Mixed Dates",price:0.500}
];

let cart = [];

function addproduct(index){
    let container = products[index]
    let quantity = document.getElementById(index).value;
    container.quantity = quantity;
    cart.push(container);
    console.log(container);

     total = 0;
     document.getElementById("card").innerHTML="";
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        let price = element.price * element.quantity;
        
        total = total + price;
        console.log(total)
        let list = document.getElementById("card");
        list.innerHTML+= `<li>${element.quantity} ${element.name}<li>` 
        
    }
    document.getElementById("total").innerText = `${total}`
    
    

}
