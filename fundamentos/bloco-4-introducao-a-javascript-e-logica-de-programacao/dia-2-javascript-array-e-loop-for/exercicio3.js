let array = ['java', 'javascript', 'python', 'html', 'css'];
let num = '';
let menor ="";

for (index = 0; index < array.length; index++) {

    if (array[index].length >= num.length) {
        num = array[index];
    }
    if (index == 0) {
        menor = array[index]
    }else if (array[index].length <= menor.length) {
        menor = array[index];
    }
}
console.log(num)
console.log(menor)