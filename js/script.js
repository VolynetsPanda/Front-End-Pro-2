// console.log('testing [1]')
// console.log('testing [2]')
// setTimeout(() => console.log('testing [3]'), 1)
// const test = new Promise((resolve, reject) => {
//     console.log('testing [7]')
//     resolve(console.log('testing [9]'))
// }).then(res => res)
// var i = 1
// console.log(i)
// i = 2
// console.log(i)
// setTimeout(() => {
//
//     console.log('testing i => ', i)
// }, 1)
// i++
// console.log('testing ii => ', i)
// for (var i = 0; i < 5; i++){
//     setTimeout(() => console.log('testing [4] => ', i), 1)
//     // console.log('testing [5] => ', i)
// }
// console.log('testing [6]')
// 3
// 4
// const byCount = (a = 5) => {
//     let count = a || 5
//     return () => count += a
// }
// const test = byCount()
// const test2 = byCount()
// console.log('testing [count] => ', test())
// console.log('testing [count] => ', test())
// console.log('testing [count2] => ', test2())
// var i = 0

// for (i = 0; i < 5; i++){
//     setTimeout(() => console.log(i), 1000)
// }
// const time = () => {
//     if ( i < 5) {
//         i++
//         console.log(i)
//         setTimeout(time, 1000)
//     }
// }
// time()
const list = document.querySelectorAll('.link')
list.forEach((elem) => {
    console.log(elem)
})
console.log(list)






