function rot13(str) {
    let charcode = 0
    let newstr = ''
    
    for(let i=0; i<str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            charcode = ((((str[i].charCodeAt(0)) - 65) + 13) % 26) + 65;
            newstr += String.fromCharCode(charcode);
        }
        else{
            newstr += str[i];
        }
    }
    return newstr;
}

let output = rot13("SERR CVMMN!");
console.log(output);