function randomElement(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let numElement = parseInt(prompt("quanti elementi vuoi generare?"));

let arraylist = [];

for(i=0; i<numElement; i++){
    arraylist.push(randomElement(1,100))
}
console.log(arraylist);
let newArray=[];
let outputNum=parseInt(prompt("quanti numeri vuoi visualizzare?"));
for(i= arraylist.length -1; i< (arraylist.length-1)-outputNum; i=i-1 ){
    newArray.push(arraylist[i]);
}
console.log(newArray);