var a=2, b=3,c=4;

console.log(`Coefficiants are: ${a} ${b} ${c}`)

var discriminant = (b*b) - (4*a*c);

if(discriminant>0){
    var root1 = (-b + Math.sqrt(discriminant))/(2*a);
    var root2 = (-b - Math.sqrt(discriminant))/(2*a);
    console.log("Two distinct and real roots exists: ", root1, root2)
} else if(discriminant<0){
    var root1 = root2 = -b/(2*a)
    var img = Math.sqrt(-discriminant)/(2*a)
    console.log(`Two distinct complex roots exists: ${root1}+i${img} ${root1}-i${img}`)
}  else if(discriminant==0){
    var root1 = root2 = -b/(2*a)
    console.log("Two equal and real roots exists: ", root1, root2)
}

