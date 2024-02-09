import axios from "axios";
const url = "http://localhost:3000/";

export class ApiClient {
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
               {   
                    this.logoutHandler();
                    return Promise.reject();
               } 
               else 
               {
                    throw error;
               }
     });
     }

     async checkToken(token)
     {
          console.log("check token")

          return this.authenticatedCall("get", `${url}Token/${token}`)

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
     
     async CreateProject(title, tags, description, picture, token)
     {
          console.log("Creating project...")
          return this.authenticatedCall("post", `${url}CreateProject`, {title,  tags, description, picture, token})
     }


}