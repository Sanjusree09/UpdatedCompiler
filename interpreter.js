// Numbers operaions like Arithmetic Expressions::
let symbolTable = {};

 function storeNumber(name, value) {
   
    symbolTable[name] = Number(value); 
    console.log(`Stored: ${name} to ${value}`);
}

function storeString(name, value){
    symbolTable[name]=value;
    console.log(`Stored String: ${name} to ${value}`);
}
//replace, split, map, trim
 function op(expression) {
   

    const tokens = expression.split(' ');  
    let left = tokens[0];  
    let operator = tokens[1]; 
    let right = tokens[2]; 
    
 
    console.log(`Tokens: left = ${left}, operator = ${operator}, right = ${right}`);
    

    
    let leftValue = isNaN(left) ? symbolTable[left] : parseFloat(left);  // Convert to number if not a number
    let rightValue = isNaN(right) ? symbolTable[right] : parseFloat(right);  // Same for right part

   
    if (isNaN(leftValue) || isNaN(rightValue)) {
        console.error('Error: One or both of the values are invalid or not found in symbolTable.');
        return undefined;
    }

    let result;
    if (operator === 'PLUS') {
        result = leftValue + rightValue  ; 
    } 
    else if (operator === 'MINUS') {
        result = leftValue - rightValue  ;  
    } 
    else if (operator === 'TIMES'){
        result = leftValue * rightValue  ;
    } 
    else if (operator === 'DIVIDE'){
        result = leftValue / rightValue  ;
    } 
    else if(operator === 'MODULO'){
        result = leftValue % rightValue ;
    }
    
    else {
        result = NaN;  
        console.error(`Unknown operator: ${operator}`);
    }

    // Return the result
    return result;
}



// Function to show results
 function show(result) {
    console.log(`Result: ${result}`);
}


module.exports = {
        storeNumber,
        op,
        show,
        storeString,

    };
