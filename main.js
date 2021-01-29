// функция принимает массив и число, проверить, что в массиве есть два числа сумма которых равна переданному числы
// const getSummNumber = (arr, b) => {
  
//   for (let n = 0; n < arr.length-1; n++){
//     for (let i = n + 1; i < arr.length; i++) {
//       if ((arr[n] + arr[i]) === b) {
//         return true
//       } 
//     }
//   }
  
//   return false
  
// }

//console.log(getSummNumber([1,2,3,4,9,16],5))

//=======================================================================

// В функцию передается число, вернуть сумму всех цифр данно числа

// const getSumm = (num) => {
//   return String(num).split('').map(el => Number(el)).reduce((acc, el) => acc + el)
// }

//console.log(getSumm(11213))

//=======================================================================

// Функция func принимае массив числе, необходимо реализовать функцию так, чтобы она вернула количество элементов переданного массива, которые отличны от наибольшего элемента не более чем на 10%

// function func(arr) {
  //let max = arr.sort((a,b) => a - b)[arr.length-1]
  //let max = Math.max(...arr)
//   let max = Math.max.apply(null, arr)
//   return arr.filter(el => max/el < 1.1 && el != max)
// }

//console.log(func([25,24,23,22,21,20]))

//=======================================================================

//В функцию передается массив и целое число, необходимо заполнить массив нулями до указанного параметра.

// function func1(arr, len) {
//   if (arr.length < len) {
//     for (let i = arr.length; i < len; i++) {
//       arr[i] = 0
//     }
//   } else {
//     return 'Think bro'
//   }
//   return arr
// }

//console.log(func1([1,2,3], 8))

//=======================================================================

//Реализовать функцию unique, которая будет принимать массив чисел и возвращать массив очищенный от дублей

// function getUniqueNumbers(arr) {
  //return arr.sort((a,b) => a - b).filter((el,index, array) => array[index] != array[index-1])
//   return Array.from(new Set(arr))
// } 

//console.log(getUniqueNumbers([1,6,2,3,4,5,1,2,5,5,16,8,4]))

//=======================================================================

// Возвращать ближайшее целое число к тому что было передано, без остатка делящаяся на 5

// function round5(val) {
//   return Math.round(val / 5) * 5;
// }

// console.log(round5(11))
// console.log(round5(2))
// console.log(round5(3))


//=======================================================================


//Необходимо реализовать функцию uniquePoints, которая принимает массив с координатами точек и возвращает массив, очищенный от дублей точек

// const arrPoints = [
//   {x = 5, у = 10},
//   {x = 6, y = 3},
//   {x = 3, y = 4},
//   {x = 5, у = 10},
//   {x = 6, y = 3},
// ]

// function uniquePoints(arr) {
//   let result = [arr[0]]

//   for (let i = 0; i < arr. length; i==) {
//     if (!result.some(val => arr[i].x === val.x && arr[i].y === val.y)) {
//       result.push(arr[i])
//     }
//   }
// }

//console.log(uniquePoints(arrPoints ))

//=======================================================================

//Необходимо перебрать массив с конца в начало и вывести сообщаения формата : под индексом 5 лежит значени 35

// let arrVal = [51, 8, 99, 71, 2, 35]


// for ( i = (arrVal.length - 1); i >= 0; i--) {
//   console.log(`Под индексом ${i} лежит элемент со значением ${arrVal[i]}`)
// }

//=======================================================================

// Написать функцию которая принимает целое положительное число и возвращает массив , в котором в убывающем порядке будут лежать числа от числа до нуля включительно, кратные трем 

// function getArr(num) {
//   let arr = []
//   for(let i = num; i >= 0; i--) {
//     if (i % 3 === 0 || i === 0) {
//        arr.push(i)
//     }
//   }
//   return arr
// }

// console.log(getArr(22))

//=======================================================================

// Функция принимает массив ир возвращает сумму чисел, которые записаны в четных индексах массива

// function getEvenElementsSum(arr) {
//   return arr.filter((el, index) => index % 2 === 0).reduce((acc, el) => acc += el)
// }

// console.log(getEvenElementsSum([5, 7, -1, 12, 3, 0]))
// console.log(getEvenElementsSum([4, -12, 29, 6, 31, 2, -50]))

//=======================================================================

// Написать функцию, которая принимает три числа, функция должна вернуть массив чисел, которые лежат в промежутке между a и b и делятся без остатка на на с

// function filter(a, b, c) {
//   let arr = []
//   for (let i = a; i <= b; i++)
//   if (i % c === 0) {
//     arr.push(i)
//   }
//   return arr
// }

// console.log(filter(5, 15, 3))


//=======================================================================

//D функцию передается строка, содержащая английскиие буквы, функция фолжна вернуть массив, содержащий все возможные комбинации букв. Повторяющихся строк в массиве быть не должно.

// function getLettersVariant(str) {
//   if (str.length === 1) {
//     return [str]
//   }
//   const arr = []
//   for (let i = 0; i < str.length; i++) {
//     const variants = getLettersVariant(str.slice(0,1) + str.slice(i + 1))
//     for (const variant of variants) {
//       if (!arr.includes(str[i] + variant)){
//         arr.push(str[i] + variant)
//       }
//     }
//   }
// }

// console.log(getLettersVariant('asdd'))

//Необходимо создать функцию encode, которая будет принимать строку с буквами на английском языке, нужно сделать так, чтобы из функции возвращалась строка в которой все гласные буквы замененеы на цифры 

// a -> 1
// e -> 2
// i -> 3
// a -> 4
// u -> 5

// также нужно написать функцию decode, которая будет принимать зашифрованную строку и возвращать восстановленную 

function encode(str) {
  let arr = ['a', 'e', 'i', 'o', 'u']
  return str.split('').map(elem => {
    let index = arr.indexOf(elem)
    return index !== -1 ? index + 1 : elem 
  }).join('')
}

function decode(str) {
  const obj = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
  return str.split('').map(elem => {
    return isNaN(elem) ? elem : obj[elem]
  }).join('')
}

console.log(encode('hello'))
console.log(decode(encode('hello')))