import axios from "axios";
const url = "http://localhost:3000/";

export class ApiClient {
          // the constructor function takes in two callback functions which change the state in the page.js.
          // the page.js is where the state is stored so the functions we callback have to be there.
          constructor(tokenProvider, logoutHandler) {
          this.tokenProvider = tokenProvider;
          this.logoutHandler = logoutHandler;
     }

     async authenticatedCall(method, url, data) 
     {
          return await axios(
          {
               method,
               url,
               headers: 
               {
                    authorization: this.tokenProvider(),
               },
               data,
          }).catch((error) => {
               console.log(error)
               if (error.response.status === 403) 
               {// 403 indicates that the user is not logged in 
                    // therefore we call the logouthandler function and clear the local storage and the state
                    this.logoutHandler();
                    return Promise.reject();
               } 
               else 
               {
                    throw error;
               }
     });
     }


     async login(Username, Password) 
     {
          console.log("SIGNED UP USER NOW TRIYNG TO LOG IN")

          return this.authenticatedCall("post", `${url}auth`, {Username, Password});
     }

     async signUp(Username, Password) 
     {
          console.log('CALLED SIGN UP CALL')

          return this.authenticatedCall("post", `${url}signup`, {Username, Password});
     }

     async checkUsername(userDetails) 
     {
          console.log("Checking username in database")
          return this.authenticatedCall('get', `${url}username/${userDetails.Username}`);
     }
}