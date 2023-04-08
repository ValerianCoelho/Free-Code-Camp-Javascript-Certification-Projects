const RomanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',  
}

function convertToRoman(num) {
    let ObjectKeys = Object.keys(RomanNumerals).reverse();
    let RomanNumber = ''
    
    while(num != 0){
        for(let i=0; i<ObjectKeys.length; i++){
            let key = parseInt(ObjectKeys[i]);
            if(num >= key){
                num = num - key;
                RomanNumber += RomanNumerals[key];
                break;
            }
        }
    }
    return RomanNumber;
}

let output = convertToRoman(29);
console.log(output);