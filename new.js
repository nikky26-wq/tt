// let word = "NIKKY"
// let result = word.toLowerCase();
// console.log('result');


// let word = ["h","e","l","l","o"];
// let result = word.reverse();

// console.log(result);



//Q - 1//
// let arr = [1, 1, 0, 1, 1, 1];

// let max = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 1) {
//         count++;
//     } else {
//         count = 0;
//     }
// }

// console.log(max);


// let arr = [1 , 1 ,  0 , 1 , 1 , 1];

// let count = 0;
// let max = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == 1) {
//         count++;
//     }if (count > max) {
//          max = count;
//     } else {
//         count = 0;
//     }
// }
// console.log(max);


// const input = require('readline-sync');
// let N = input.questionInt("Enter your Number");

// let index = 0;



// let nums = [3, 0, 1, 5];
// let n = nums.length;

// for (let i = 0;  i <= n; i++) {
//     let found = false; 
    
//     for(let j = 0; j < nums.length; j++){
//         if (nums[j] === i){
//             found = true;
//             break;
//         }

//     }

// if(found === false){
//     console.log(i);
// }

// }


// // let nums = [3, 0, 1];
// // let n = nums.length;

// // for (let i = 0; i <= n; i++) {
// //     let found = false;

// //     for (let j = 0; j < nums.length; j++) {
// //         if (nums[j] === i) {
// //             found = true;
// //             break;
// //         }
// //     }

// //     if (found === false) {
// //         console.log(i);
// //     }
// // }


// let num1 = 123;
// let num2 = 456;

// console.log(num1*num2);






//Q-1//

// let a = "";
// // let ans = a.reverse().split().join();
// let ans = a.split('').reverse().join("");

// console.log(ans);



// let str = "I love coding"
// function rrevSe(str){
//     return str.split(" ").reverse().join(" ");
// }

// console.log(rrevSe("I LOVE CODING"));
// console.log(rrevSe("JS is Fun"));
// console.log(rrevSe("Hellow"));



// Star //
// for(let i = 1; i<=3; i++){
//     let row = "";

// for(let j=1; j<=i; j++){
//     row += "* ";
// }

// console.log(row);

// }




// for(let i = 1; i <= 3; i++){
//     let row = "";

//     for(let j = 1; j <= i; j++){
//         row += "* "
//     }
//     console.log(row);
// }


for(let i=1; i <= 3; i++){
    let row = "";

    for(let j = 1; j <=3; j++){
        row += "* ";
    }

    console.log(row);
}