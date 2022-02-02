function updateProductNumber(isIncreasing){
    const numberInput = document.getElementById('number1-input');
    let inputNumber = numberInput.value;
    if(isIncreasing == true){
        inputNumber = parseInt(inputNumber) + 1; 
    }
     else if(inputNumber > 0){
        inputNumber = parseInt(inputNumber) - 1;
    }
    numberInput.value = inputNumber;

    // Update multiple product total 
   const productTotal = document.getElementById('product1-total');
   productTotal.innerText = inputNumber * 2499;
}

document.getElementById('product1-plus').addEventListener('click', function(){
updateProductNumber(true);
})


document.getElementById('product1-minus').addEventListener('click', function(){
    updateProductNumber(false);
    
})




function updateProductNumber2(isIncreasing){
    const numberInput2 = document.getElementById('number2-input');
    let inputNumber2 = numberInput2.value;
    if(isIncreasing == true){
        inputNumber2 = parseInt(inputNumber2) + 1; 
    }
     else if(inputNumber2 > 0){
        inputNumber2 = parseInt(inputNumber2) - 1;
    }
    numberInput2.value = inputNumber2;

    // Update multiple product total 
   const productTotal = document.getElementById('product2-total');
   productTotal.innerText = inputNumber2 * 2499; 
}

document.getElementById('product2-plus').addEventListener('click', function(){
updateProductNumber2(true);
})


document.getElementById('product2-minus').addEventListener('click', function(){
    updateProductNumber2(false);
    
})



