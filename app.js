let dateOfBirth =document.querySelector('#date-of-birth')
let luckyNumber =document.querySelector('#lucky-number')
let checkNumberButton =document.querySelector('#check-lucky')
let displayOutput =document.querySelector('#display-output')

checkNumberButton.addEventListener('click',modifyDate)

function modifyDate() {
let lucky=Number(luckyNumber.value)
let dob=dateOfBirth.value
dob=dob.replaceAll("-","")
let sum= sumOfDigits(dob)
// console.log(sum);
LuckyNumberCheck(sum,lucky);

}


function sumOfDigits(dob) {
    let sumOfNumbers=0;
    for(let index=0;index<dob.length;index++) {
        sumOfNumbers+=Number(dob.charAt(index))
     
    }
    return sumOfNumbers;
}

function LuckyNumberCheck(sum,lucky) {
    if(sum%lucky==0) {
        displayOutput.textContent="yay you're birthday is lucky!🤗"
    }
    else{
        displayOutput.textContent="Oops, you're birthday is not lucky 😮"
    
    }
}