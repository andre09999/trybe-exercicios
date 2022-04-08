let num = 50;
let primo = 0;
for (index = 2; index < num; index++){
    if (num % index == 0)  {
        
    } else{
        if (index > primo) {
            primo = index
        }
    }
}
console.log(primo)
