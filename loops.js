//Print odds 1-20
for(var i = 1; i<=20; i++){
    if(i%2==1){
        console.log(i)
    }
}
//Decreasing Multiples of 3
for(var i =100; i > 0; i--){
    if(i%3==0){
        console.log(i)
    }
}
//Print the sequence using a loop write code that will execute in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
for(var i = 4; i >= -3.5; i -=1.5){
    console.log(i)
}
// Sigma write code that will add all of the values from 1-100 onto some variable sum
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum += i;
}
console.log(sum);
//Factorial write code that will multiply all of the values from 1-12 onto some variable product
var product = 1;
for(var i = 1; i <= 12; i++){
    product *= i;
}
console.log(product);