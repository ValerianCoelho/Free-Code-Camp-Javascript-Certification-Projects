function telephoneCheck(str) {
    let regexone = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
  
      if (regexone.test(str)) {
          return true;
      }
      return false;
  }
  
  let output = telephoneCheck("1 555)555-5555");

  console.log(output);