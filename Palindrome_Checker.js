function palindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '');
  str = str.toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  if(str == reversedStr){
    return true;
  }
  return false;
}

palindrome("eye");