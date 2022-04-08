let quad = 5;
linha = "";
for (index = 0; index < quad; index++) {
    for (index1 = quad - index - 1; index1 > 0; index1--) {
        linha += ' ';
    }
    for (index0 = index; linha.length != 5; index0++) {
        linha += '*';
    }
    console.log(linha);
    linha = '';
} 
