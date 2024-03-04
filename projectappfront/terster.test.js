//####### Password Tests #######//
const checkPassword = (Password) => {
     const isValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,20}$/g.test(Password);
     console.log("checked")
     return isValid ? true : false 
}
//^^^^ check password regex ^^^^//
test("Return fase when given less that 8 characters.", () => {

     expect(checkPassword("")).toBe(false);
     expect(checkPassword("a")).toBe(false);    
     expect(checkPassword("aa")).toBe(false);    
     expect(checkPassword("aaa")).toBe(false);    
     expect(checkPassword("aA1!")).toBe(false);    
     expect(checkPassword("aaA1!")).toBe(false);    
     expect(checkPassword("aaaA1!")).toBe(false);    
     expect(checkPassword("aaaaA1!")).toBe(false); 

})

test("Return fase when given more that 20 characters.", () => {

     expect(checkPassword("aaaaaaaaaaaaaaaaaaA1!")).toBe(false);  
     expect(checkPassword("aaaaaaaaaaaaaaaaaaaA1!")).toBe(false);  
     expect(checkPassword("aaaaaaaaaaaaaaaaaaaaA1!")).toBe(false);  

})

test("Return false with no special charater.", () => {

     expect(checkPassword("aaaaaaaA1")).toBe(false);
     expect(checkPassword("aaaaaaaaA1")).toBe(false);
     expect(checkPassword("aaaaaaaaaA1")).toBe(false);

})

test("Return false with no capital letter.",() => {

     expect(checkPassword("aaaaaaa1!")).toBe(false);
     expect(checkPassword("aaaaaaaa1!")).toBe(false);
     expect(checkPassword("aaaaaaaaa1!")).toBe(false);

})

test("Return false with no lowecase letter.",() => {

     expect(checkPassword("AAAAAAA1!")).toBe(false);
     expect(checkPassword("AAAAAAAA1!")).toBe(false);
     expect(checkPassword("AAAAAAAAA1!")).toBe(false);

})

test("Return false with no number.",() => {

     expect(checkPassword("AAAAAAAa!")).toBe(false);
     expect(checkPassword("AAAAAAAAa!")).toBe(false);
     expect(checkPassword("AAAAAAAAAa!")).toBe(false);

})

test("Return true when the password contains at least 1 number, 1 capital one, 1 lower case, 1 special charater and is 8-20 charaters long", () => {

     expect(checkPassword("AAAAAAa1!")).toBe(true);
     expect(checkPassword("AAAaaaaA1!")).toBe(true);
     expect(checkPassword("AAAaaaaaAA1!")).toBe(true);

})


const comparePassword = (Password, Password2) => {
     if(Password === Password2) 
     {
          //return checkPassword()
          return true
     }
     return false;
}
//^^ check passwords are same ^^//

test("return false if passwords dont match", () => {

     expect(comparePassword("AAAAAAa1!","BBBBBBb1!")).toBe(false);
     expect(comparePassword("AAAAAAa1!","AAAAAAa1!")).toBe(true);

})

const CompareAndCheckPassword = (Password, Password2) =>{
     if(comparePassword(Password, Password2))
     {
          return checkPassword(Password)
     }
     else return false
     
}

test("Return false if the passwords dont match", () => {

     expect(CompareAndCheckPassword("AAAAAAa1!","BBBBBBb1!")).toBe(false)
     expect(CompareAndCheckPassword("AAAAAAa1!","AAAAAAa1!")).toBe(true)


})
//##############################//