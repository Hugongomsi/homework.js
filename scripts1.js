let number = [1, 2, 3, 4, 5, 100]
let sum = 1
for (let i = 2; i <= 100; i += 2) {
    let x = i * i;
    console.log(`the sum of square of even number from [1] to [100] is: " ${i} is: ${x}`);
        sum = sum + x
}
console.log(`now the total is: ${sum}`);
/////////
for (let i = 1; i <= 100; i += 2) {
    let x = i * i;
    console.log(`the sum of square of odd number from [1] to [100] is: " ${i} is: ${x}`);
       sum = sum + x
}
console.log(`now the total is: ${sum}`)
/////
sum = 0;
for (let i = 1 ; i <= 5; i++) {
    sum = sum + i ;
}

console.log(`now the total is: ${sum}`)

