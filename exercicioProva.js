/*55. Na teoria dos sistemas, define-se como elemento minimax de uma matriz o menor elemento da linha onde se
encontra o maior elemento da matriz. Escreva um algoritmo que leia uma matriz 10 X 10 de números e encontre seu
elemento minimax, mostrando também sua posição*/

let Matriz = new Array(4)

Matriz[0] = [0,3,400,1]
Matriz[1] = [20,180,5,7]
Matriz[2] = [5,90,1,3]
Matriz[3] = [9,71,1110,70]

let maior = 0
let menor = 0
let numeroLista = 0
let posMenor=0

for(let i = 0 ; i < Matriz.length ; i++){

    for(let k = 0 ; k < Matriz.length ; k++){

        if(Matriz[i][k] > maior){
            maior = Matriz[i][k]
            numeroLista = i
            menor = Matriz[i][k]
        }

    }
    

    for(let m = 0 ; m < Matriz[numeroLista].length ; m++){



        if(Matriz[numeroLista][m] < menor){

            menor = Matriz[numeroLista][m]
            posMenor = [m]

        }

    }

}

console.log(`Maior numero: ${maior} e Menor numero: ${menor} e sua posição é:  ${posMenor} na Lista ${numeroLista}`);