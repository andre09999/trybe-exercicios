let fat = 10;
let resul = 1;
for (index = fat; index >= 1; index--){
    console.log(index, '*')
    resul *= index ;
}
console.log('=',resul)