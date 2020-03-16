var units = 150;
var totAmt;

if(units<=50){
    totAmt = units*0.5;
} else if( units<=150){
    totAmt = (50*0.5)+(units-50)*0.75;
} else if(units<=250){
    totAmt = (50*0.5)+(100*0.75)+(units-150)*1.20
} else {
    totAmt = (50*0.5)+(100*0.75)+(100*1.20)+(units-250)*1.50
}

var sur_charge= totAmt*0.20;
totAmt += sur_charge; 

console.log("Electricity Bill: ", totAmt);