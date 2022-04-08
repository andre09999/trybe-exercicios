let quad = 5;
linha = "";
for (index = 2; index < quad; index++) {
    for (index0 = index; linha.length != quad-index-1; index0++) {
        linha += ' ';
    }
    for (index0 = index; linha.length != index+1; index0++) {
        linha += '*';
    }
    console.log(linha);
    linha = '';
} 
