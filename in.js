// let word = "NIKKY";
// let result = word.toLowerCase();

// console.log(result);


// let word = ["h","e","l","l","o"];
// let result = word.reverse();

// console.log(result);


// let word = ["H","a","n","n","a","h"];
// let result = word.reverse();

// console.log(result);

// let jewels = "aAAbbbb";

// let result = stones.split('').filter(stone => jewels.includes(stone)).length;
//     console.log(result);


// var numJewelsInStones = function(jewels, stones) {
//     let result = stones.split('').filter(stone => jewels.includes(stone)).length;
//     return result;
// };


// let arr = [1, 1, 0, 1, 1, 1];

// let index = 0;
// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//         count++;
//         if (count > max) {
//             max = count;
//         }
//     } else {
//         count = 0;
//     }
// }

// console.log(max);



// let index = 0;


// let input  = [5,11,51,18,33,12];

// const input = require('readline-sync')
// let N = input.questionInt("enter you input")
// let index = 0;

//     let max1 = 0;
//     let max2 = 0;
//     let max3 = 0;

// for(let i = 0; i<=N; i++){

//     let num = input.questionInt("enter you numbers");

//     if (num>max1){
//         max3 = max2;
//         max2 = max1;
//         max1 = num;
//     }else if(num>max2){
//         max3 = max2;
//         max2 = num;
//     }else if(num>max3){
//         max3 = num;
//     }
// }

// console.log(max3);


//  const input = require('readline-sync');
//  let N = input.questionInt("enter you input");

//  while(N >= 10){
//     let sum = 0;

//     while(N>0){
//         sum += N%10;
//         N = Math.floor(N/10);
//     }
//     N = sum;
//  }

//  console.log(N);


// let index = 0;
// let A = [1,3];
// let B = [2]

// let C = A.concat(B);

// // let i = 0;
// C.sort((a, b) => a - b);

// console.log(C);
    
// let n = C.length;

// if (n%2 === 0){
//     let middle = Math.floor(n / 2);

// }

    // for (let j = i + 1; j < C.length; j++) {

        // if (C[i] > C[j]) {
        //     let temp = C[i];
        //     C[i] = C[j];
        //     C[j] = temp;

        // C.sort((a, b) => a - b);
        // }\
    // }
// }

// const input = require('readline-sync')
// let N = input.questionInt("enter you input")

// let A = [1, 3];
// let B = [2];

// let C = A.concat(B);

// console.log(C);

// C.sort((a, b) => a - b);

// let n = C.length;

// if (n % 2 == 0) {
//     console.log((C[n / 2 - 1] + C[n / 2]) / 2);
// } else {
   
//     console.log(C[Math.floor(n / 2)]);
// }


// // let n = C.length;

// // if (n % 2 != 0) {
// //     let middle = Math.floor(n / 2);
// //     console.log(C[middle]);
// // } else {
// //     let middle1 = n / 2 - 1;
// //     let middle2 = n / 2;

// //     let median = (C[middle1] + C[middle2]) / 2;

// //     console.log(median);
// // }





// const input = require('readline-sync');
// let N = input.questionInt("Enter your Number");
// let index = 0;




// let array = [4, 1, 2, 2, 4, 10];

// for (let i = 0; i < array.length; i++) {
//     let count = 0;

//     for (let j = 0; j < array.length; j++) {
//         if (array[i]==array[j]){
//             count++;
//         }
//     }
    
//     if(count == 1){
//         console.log(array[i]);
//     }
// };


// const input = require ('readline-sync');
// let N = input.questionInt("Enter Number");

// let num = [2,7,11,15];
// let target = 18;

// for (let i = 0; i < num.length; i++) {
//     for (let j = i+ 1; j < num.length; j++) {
        
//     if (num[i] + num[j] === target){
//         console.log(i,j);
//     }
// }
// };


// let index = 0;
// let arr = abcabcbb;

// for (let index = 0; index < array.length; index++) {
    
//     for (let j = 0; j < array.length; i++){
//         if(nu)
//     }
    
// }
///////////////////////////////////////////////////////////////////////////////////////////////

// let index = 0;
// let n = [9,6,4,2,3,5,7,0,1];
// let num = 0;

// for (let i = 0;  i<10; index++) {
//     if (i<10){
//         num++;
//     }else{
//         console.log(Number);
//     }
// }




let n = "anagram";
let t = "nagaram";

let spp = n.split('').sort().join('')
let spl = t.split('').sort().join('')

if (spp === spl){
    console.log("YES");
}else{
    console.log("NO");
}

