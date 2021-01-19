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

console.log(getSummNumber([1,2,3,4,9,16],5))

// В функцию передается число, вернуть сумму всех цифр данно числа

const getSumm = (num) => {
  return String(num).split('').map(el => Number(el)).reduce((acc, el) => acc + el)
}

console.log(getSumm(11213))