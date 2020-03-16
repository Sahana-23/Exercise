var amount = 2737;

console.log("Amount: ",amount)
if(amount>1000){
    var count = parseInt(amount/1000); 
    console.log("Number of 1000 notes: ",count);
    amount-= 1000*count;
}
if(amount>500){
    var count = parseInt(amount/500);
    console.log("Number of 500 notes: ",count);
    amount-= 500*count;
}
if(amount>100){
    var count = parseInt(amount/100);
    console.log("Number of 100 notes: ",count);
    amount-= 100*count;
}
if(amount>50){
    var count = parseInt(amount/50);
    console.log("Number of 50 notes: ",count);
    amount-= 50*count;
}
if(amount>20){
    var count = parseInt(amount/20);
    console.log("Number of 20 notes: ",count);
    amount-= 20*count;
}
if(amount>10){
    var count = parseInt(amount/10);
    console.log("Number of 10 notes: ",count);
    amount-= 10*count;
}
if(amount>1){
    var count = parseInt(amount/1);
    console.log("Number of 1 coins: ",count);
    amount-= 1*count;
}