var phy=10,chem=20,bio=30, math=40 ,computer=50;

var avg = (phy+chem+bio+math+computer)/500;

var per = avg*100;

var grade;

if(per>=90){
    grade ="A";
} else if(per>=80){
    grade ="B";
} else if(per>=70){
    grade ="C";
} else if(per>=60){
    grade ="D";
}else if(per>=40){
    grade ="E";
} else {
    grade = "F";
}

console.log("Percentage: ",per,"\t Grade:",grade)