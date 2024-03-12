function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = [1,2,3,4,5,6,7]

if (array1.length>array2.length){
    for (i=0; i=(array1.length - array2.length); i++){
        array2.push(randomNum(1,100))
    }
    console.log(array2);
} else if(array1.length<array2.length){
    for (i=0; i=(array2.length - array1.length); i++){
        array1.push(randomNum(1,100))
    }
    console.log(array1);
} else{
    console.log("i due array hanno lo stesso numero di elementi")
}