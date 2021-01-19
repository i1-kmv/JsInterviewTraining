// функция принимает массив и число, проверить, что в массиве есть два числа сумма которых равна переданному числы
const getSummNumber = (arr, b) => {
  
  for (let n = 0; n < arr.length-1; n++){
    for (let i = n + 1; i < arr.length; i++) {
      if ((arr[n] + arr[i]) === b) {
        return true
      } 
    }
  }
  
  return false
  
}

//console.log(getSummNumber([1,2,3,4,9,16],5))

//=======================================================================

// В функцию передается число, вернуть сумму всех цифр данно числа

const getSumm = (num) => {
  return String(num).split('').map(el => Number(el)).reduce((acc, el) => acc + el)
}

//console.log(getSumm(11213))

//=======================================================================

// Функция func принимае массив числе, необходимо реализовать функцию так, чтобы она вернула количество элементов переданного массива, которые отличны от наибольшего элемента не более чем на 10%

function func(arr) {
  //let max = arr.sort((a,b) => a - b)[arr.length-1]
  //let max = Math.max(...arr)
  let max = Math.max.apply(null, arr)
  return arr.filter(el => max/el < 1.1 && el != max)
}

//console.log(func([25,24,23,22,21,20]))

//=======================================================================

//В функцию передается массив и целое число, необходимо заполнить массив нулями до указанного параметра.

function func1(arr, len) {
  if (arr.length < len) {
    for (let i = arr.length; i < len; i++) {
      arr[i] = 0
    }
  } else {
    return 'Think bro'
  }
  return arr
}

//console.log(func1([1,2,3], 8))

//=======================================================================

//Реализовать функцию unique, которая будет принимать массив чисел и возвращать массив очищенный от дублей

function getUniqueNumbers(arr) {
  //return arr.sort((a,b) => a - b).filter((el,index, array) => array[index] != array[index-1])
  return Array.from(new Set(arr))
} 

//console.log(getUniqueNumbers([1,6,2,3,4,5,1,2,5,5,16,8,4]))

//=======================================================================

// Возвращать ближайшее целое число к тому что было передано, без остатка делящаяся на 5

function round5(val) {
  return Math.round(val / 5) * 5;
}

console.log(round5(11))
console.log(round5(2))
console.log(round5(3))

