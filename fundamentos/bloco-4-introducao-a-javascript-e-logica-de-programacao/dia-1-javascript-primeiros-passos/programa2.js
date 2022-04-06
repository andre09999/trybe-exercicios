const num1 = 8;
const num2 = 4;
const num3 = 6;

if (num1 > num2 && num1 > num3) {
    if (num3 > num2) {
        console.log(num1, "e maior que", num3, "e maior que",num2 );
    }
    else {
        console.log(num1, "e maior que", num2, "e maior que", num3);
    }
    
}
else if (num1 === num2 || num1 === num3 || num3==num2){
    if (num3 === num2) {
        console.log( num3, "e ",num2 ,"sao iguais" );
    }
    else if(num3===num1) {
        console.log(num1, "e igual a", num3);
    }
    else if (num2 == num1) {
        console.log(num1,"E igual a",num2)
    }
} else if (num2 < num1 && num2 < num3) {
    if (num3 > num1) {
        console.log(num2, "e maior que", num3, "e maior que",num2 );
    }
    else {
        console.log(num2, "e maior que", num1, "e maior que", num3);
    }
    
} else if (num3 > num1 && num3 > num1) {
    if (num2 > num1) {
        console.log(num3, "e maior que", num2, "e maior que",num1 );
    }
    else {
        console.log(num3, "e maior que", num1, "e maior que", num2);
    }
}
