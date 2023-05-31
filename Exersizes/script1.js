"use strict";

// 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'

// let foo = function() {
//     let a = prompt('Введите текст', )
//     let result = '';
//     for(let i = 0; i <= a.length; i++) {
//         if(a.charAt(i) == 'b') {
//             result++
//         }
//     }
//     return result;
// }
// console.log(foo());

let foo = function(symbol) {
    let a = prompt('Введите текст', )
    let result = '';
    for(let i = 0; i <= a.length; i++) {
        if(a.charAt(i) == symbol) {
            result++
        }
    }
    return result;
}
console.log(foo());