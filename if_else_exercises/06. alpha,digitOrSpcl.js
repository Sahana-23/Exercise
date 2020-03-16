var ch='?';

if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z')){
    console.log(ch," is a alphabet")
} else if(ch>=0 && ch<10){
    console.log(ch," is a digit")
} else {
    console.log(ch," is a special character")
}