let fruits = [
    'banana', 'mela','pera','ciliegia','arancia','mandarino','cocomero','limone','fragola'
];
console.log(fruits);
fruits.push("pesca");
console.log(fruits[9]);
let cocktailIngredient= "cocomero"
for (i=0; i<fruits.length; i++){
    if(cocktailIngredient===fruits[i]){
        console.log("Trovato! Devo solo preparare il cocktail.")
    }else{
        console.log("Oh no, devo uscire a comprare il cocomero");
    }
}



