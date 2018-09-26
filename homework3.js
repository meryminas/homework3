    const f1= function(a, b, c) {
    const op1 = a + b + c;
    const op2 = (a/b)* c;
    const op3 = (c-a)/(b-a);
    return (op1-op3+op3)/2
  };
 console.log(f1(12, 44, 100));
  
  const f2= function() {
     const a= 3;
     const b= 12;
     return b/a
  };
 console.log(f2());
  
  const f3= function(fName, lName){
    const fullName = fName + " " + lName;
    console.log(fullName)
    
  };
  f3('Rory', 'Gallagher' );
  
  const f4= function(s1, s2, s3){
    if(s1.length > s2.length && s1.length>s3.length) {
      return s1;
    } else if (s2.length > s1.length && s2.length > s3.length) {
        return s2; 
    } else if (s3.length> s1.length && s3.length> s2.length){
        return s3
    }
  };
  console.log(f4("string1", "the longest string","longer than s1"));
  
  const f5= function(num1, num2){
    if(num1 ===num2){
     return 0;
    } else if(num1 > num2){
       return 1;
    }else {return -1}
  };
  console.log(f5(234, 128))
  
  const multiply= function(k, l) {
    const result= k*l
    return result
  };
   
  const divide= function(h, j) {
    const result= h/j
    return result
   };
    
  const triangleArea = function(base, height) {
    const operation1 = multiply(base, height);
    const operation2 = divide (operation1, 2);
    return operation2
  };
  console.log(triangleArea(34, 100));
  
  const numLength= function(number) {
    return number.length  
  };
  console.log(numLength("24345672"));
  
  const f10 =function(string1, string2, number){
    if (string1.length + string2.length > number){
      return 1}
    else {return -1}
  };
  console.log(f10("pink", "pantera", 10));  

  const runStuff= function(n1, n2, str){
    if(str==="rectangle") {return n1*n2
   }else if (str ==="triangle"){return triangleArea(n1, n2)
    } else {return -1 }
  };
  console.log(runStuff(12,6, "rectangle"))  

  


