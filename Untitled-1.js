// const radius = [4, 8 , 22, 10, 9];

// const area = function (radius) {
// return Math.PI * radius * radius;
// }

// const diameter = function (radius) {
// return 2 * radius;
// }

// const circumference = function (radius) {
// return 2 * Math.PI * radius;
// }

// const calculate = function (radius, logic) {
// const output = [] ;
// for(let i = 0; i < radius.length; i++){
// output.push(logic(radius[i]));
// }
// return output;
// }
// console.log(calculate(radius, area));



// let data = [...new Set(["1","2","2","2",8,6,8,8,"9"])];
// console.log(data);



// var data = [
//     {firstName : "Henry", lastName : "Cavil", age : 38 }, 
//     {firstName : "Ben", lastName : "Affleck", age : 42 },
//     {firstName : "Gal", lastName : "Gadot", age : 34 },
//     {firstName : "Jason", lastName : "Momoa", age : 38 }
// ];

// const result = data.reduce((acc, curr) => {
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     } else{
//         acc[curr.age] = 1
//     };
//     return acc;
// })
// console.log(result);

// const output = data.reduce(function(acc, curr){
//    if(curr.age < 40){
//     acc.push(curr.firstName);
//    }
//    return acc;
// },{});
// console.log(output);


// const data = [1,2,3,4,5];

// const output = data.reduce((acc, curr, index, data)=>{
//     debugger
//     let total = acc + curr
//     if(index === data.length - 1){
//         total / data.length 
//     }
//     return total
// });

// console.log(output);



// const arr1 = [1,2,3,4,5,6];
// const arr2 = [4,5,6,7,8];

// const intersection = arr1.filter((curr) => {
//     return arr2.includes(curr);
// })

// const all = [...arr1,...arr2];

// const unique = all.filter((elem) => {
//     return !intersection.includes(elem);
// })
// console.log(unique);



// var myName = "Saurav";

// const output = () => {
//     var myName = "Sinha"
//     console.log(myName);
// }
// output();



// const rever = (num) => {
//     let change = num.toString().split("").reverse().join("");
//     console.log(change);
// }
// rever(1234);



// let num = 113;
// var isPrimeNumber = true;

// for(let i = 2; i < num; i++){
//    if( num % i == 0){
//     isPrimeNumber = false;
//    }
// };
// if(isPrimeNumber == true){
//     console.log(`${num} is a prime number`)
// }else {
//     console.log(`${num} is not a prime number`)
// }



// let num = 5;
// let factorial = 1;

// for(let i = 1; i <= num; i++){
//     factorial = factorial * i
// }
// console.log(factorial);



// const check = () => {
//     let char = "E"
//     char = char.toLowerCase();
//     if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//         console.log(` ${char} is vowel`);
//     }else {
//         console.log(` ${char} is Consonant`)
//     }
// }
// check();




// const fibonacci = () => {
//     let num = 100;
//     let x = 0;
//     let y = 1;
//     let fn = x + y;

//     while (fn < num) {
//         fn = x + y
//         x = y 
//         y = fn

//         console.log(x);
//     };
// }
// fibonacci();


//currying
// const sum = (a) => (b) => (c) => (d) => (a+b+c+d);

// const add = sum(4)(5)(6)(10);
// console.log(add);

// infinite currying
// function sum(a) {
//     return function (b){
//         if(b) return sum (a + b);
//         return a;
//     };    
// }

// console.log(sum(4)(5)(6)(8)(9)());




// const time = () =>{
//     const stop = setInterval(() =>{console.log("hello")},1000)
//     setTimeout(()=>{console.log("start")},5000
//     );
    
// }
// time();



// Nestesd Loops
// const alphabet = [["a","b","c"],["d","e","f"],["g","h","i"]]

// for(let i = 0; i < alphabet.length; i++){
//     console.log(`ROW ${i + 1}`)
//     const row = alphabet[i];
//     for(let i = 0; i < row.length; i++){
//         console.log(row[i]);
//     }
// }



// const num = [1,2,8,11,5,69,7,3,4];

// let biggest = 0;
// for(let i of num){
//     if(i > biggest){
//         biggest = i
//     }
// };
// console.log(biggest);



// function greet (name){
//     console.log(`Hiii ${name}`)
// };
// greet("Saurav Sinha");


// function isSnakeEyes (num1, num2){
//     if(num1 === num2){
//         console.log("matched")
//     }else{console.log("notMatched")};
// }
// isSnakeEyes(6,6)


// function capitalize(p){
//     let final =" "
//    return final = p.split("");
// }
// capitalize('eggplant');



// const num = [1,2,3];
// let res = 0;

// for(let i = 0; i < num.length; i++){
//     res = res + num[i];
// }
// console.log(res);



// const hen = {id : "Helen",  eggCount : 0, layAnEgg(){
//     console.log("EGG")
//     return this.eggCount ++;
// }}
// hen.layAnEgg();



// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// const res = fullNames.map((x) => x.first);
// console.log(res);


// let i = 1;
// while (i < 10) {
//     console.log(i)
//     i++
// }


// var num = 8;
// for(i = 0; i <= 10; i++){
//     console.log(`${num} * ${i} = ${ num * i} `)
// }



// let num = 0;
// for(let i = 0; i < 10; i++){
//     console.log(i * num);
// }