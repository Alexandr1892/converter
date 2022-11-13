let resultBin = document.querySelector('.result')
let button = document.querySelector('.button')
let number = document.querySelector('.number-one')
let sumBin = document.querySelector('.sum')
let clearButton = document.querySelector('.button-clear')


function convertBin (n) {
    let num = n;
    num = parseInt(number.value)
    let binary = (num % 2).toString();
    for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
    }
   
    return binary;
   
    }

button.addEventListener ('click', function() {
        
        let binary = convertBin();
    resultBin.innerText = `${binary} - binary number`



    let arr = binary.split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    sumBin.innerText = `${sum} - the sum of the units of a binary number`
    

    })
 
clearButton.addEventListener('click', function() {
    resultBin.innerText = ''
    sumBin.innerText = ''
    number.value = ''
})
    