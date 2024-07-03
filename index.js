let numero1;
let numero2;
let resultados = 0;
let opcao = 0;

console.log("Digite 2 números que deseja fazer os cálculos: ");
console.log("Escolha uma das operações abaixo: ");
console.log("1: adição:");
console.log("2: subtração:");
console.log("3: multiplicação:");
console.log("4: divisão:");
console.log("5: porcentagem:");
console.log("6: Encerrando o programa:")

process.stdin.on("data", function(data) {
    let input = +data.toString().trim()

    if(!numero1) {

        numero1 = input
    } else {
        numero2 = input

        let i
        let maior
        let menor

        if(numero1 > numero2) {
            maior = numero1
            menor = numero2
        } else {
            maior = numero2
            menor = numero1
        }

        console.log(numero1 + numero2);
        console.log(numero1 - numero2);
        console.log(numero1 * numero2);
        console.log(numero1 / numero2);
        console.log((numero1 /100) * numero2);
        
        process.exit()


    }
})