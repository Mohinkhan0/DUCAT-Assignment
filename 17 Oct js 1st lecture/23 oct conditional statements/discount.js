var amount = 8000;
var discount=0;

if (amount >= 10000) {
    discount= amount*30/100;
    total=amount+discount;
    console.log("Total pay = " + total + "Discount = " + discount)
  
} else if (amount <= 10000 && amount >= 5000) {
    discount= amount*20/100;
    total=amount+discount;
    console.log("Total pay = " + total + "Discount = " + discount)
  
} else if (amount <= 5000 && amount >=2000) {
    discount= amount*10/100;
    total=amount+discount;
    console.log("Total pay = " + total + "Discount = " + discount)
  
} else {
  console.log("No disceount !!!");
}
