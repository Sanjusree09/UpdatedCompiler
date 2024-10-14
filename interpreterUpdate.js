let symbolTable = {};  // Symbol table to store variables

function storeNumber(name, value) {
    symbolTable[name] = Number(value);
    console.log(`Stored Number: ${name} to ${value}`);
}

function storeString(name, value) {
    symbolTable[name] = value;
    console.log(`Stored String: ${name} to ${value}`);
}
function storeArray(name, values){
    if(!Array.isArray(values)){
        console.error(`Error: Values must be an array`);
    return;
    }
    symbolTable[name]=values;
    console.log(`Stored Array: ${name} to [${values.join(`, `)}]`);
}

function accessArrayElement(name, index){
    if(symbolTable.hasOwnProperty(name)){
        const array = symbolTable[name];
        if(Array.isArray(array)){
            return array[index]
        } else {
            console.error(`Error: ${name} is not an array.`);
        }
    } else {
        console.error(`Error: Array ${name} not found.`);
    }
    return undefined;
    }

    


function op(expression) {
    const tokens = expression.split(' '); 
    let operator;
    let currentValue = "";  // Initialize as an empty string to concatenate
    let operandValue;

    for (let i = 0; i < tokens.length; i++) {
        if (i % 2 === 0) {  // Even indices are values (p, q, or string)
            let value = tokens[i];

            // If the value is a variable (p, q, etc.), get it from the symbolTable
            if (symbolTable.hasOwnProperty(value)) {
                operandValue = symbolTable[value];
            } else {
                operandValue = value;  // Treat it as a literal string if not found
            }

            // If it's the first value (no operator), set it as the initial value
            if (i === 0) {
                currentValue = operandValue;
            } else {
                // Concatenate the current value with the next operand based on the operator
                if (operator === 'PLUS') {
                    if(typeof currentValue === 'string' || typeof operandValue === 'string'){
                        currentValue = `${currentValue} ${operandValue}`;  // Concatenate strings
                           
                    }
                    else{
                        currentValue += operandValue;
                    }
                    
                } else if(operator === 'MINUS'){
                    if(typeof currentValue === 'string' || typeof operandValue === 'string' ){
                        console.error("Error: Cannot subtract strings.");
                        return undefined;
                    }
                    else{
                        currentValue -=operandValue;
                    }
                }
                else if(operator === 'TIMES'){
                    if(typeof currentValue === 'string' || typeof operandValue === 'string' ){
                        console.error("Error: Cannot multiple strings.");
                        return undefined;
                    }
                    else{
                        currentValue *=operandValue;
                    }
                }
                else if(operator === 'DIVIDE'){
                    if(typeof currentValue === 'string' || typeof operandValue === 'string' ){
                        console.error("Error: Cannot divide strings.");
                        return undefined;
                    }
                    else{
                        currentValue /=operandValue;
                    }
                }
                else if(operator === 'MOD'){
                    if(typeof currentValue === 'string' || typeof operandValue === 'string' ){
                        console.error("Error: Cannot mod strings.");
                        return undefined;
                    }
                    else{
                        currentValue %=operandValue;
                    }
                }
            }
        } else {  // Odd indices are operators (PLUS, MINUS, etc.)
            operator = tokens[i];
        }
    }

    return currentValue;
}

// Show the result
function show(result) {
    if (result === undefined) {
        console.log('Undefined');
    } else {
        console.log(`Result: ${result}`);
    }
   
}

module.exports = {
    show,
    op,
    storeNumber,
    storeString,
    storeArray,
    accessArrayElement
};
