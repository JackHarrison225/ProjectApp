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
          console.log("Check Token")
          return this.authenticatedCall("get", `${url}Token/${token}`);
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

     async addEmail(username, email)
     {
          console.log("add email")
          return this.authenticatedCall('patch', `${url}addEmil`, {username, email})
     }

     async forgotPasswordLink(username, email)
     {
          console.log("Forgot password")
          return this.authenticatedCall('patch', `${url}forgotPassword`, {username, email})
     }

     async ChangeUsername(email, password, username, newUsername)
     {
          console.log("Change username")
          return this.authenticatedCall('patch', `${url}changeUsername`, {email, password, username, newUsername})
     }

     async changePassword(page, userInfo)
     {
          console.log("Change password")
          return this.authenticatedCall('patch', `${url}changePassword`, {page, userInfo})
          
     }

     async checkUsername(userDetails) 
     {
          console.log("Checking username in database")
          return this.authenticatedCall('get', `${url}username/${userDetails.Username}`);
     }
     
     async addFriend(Username, Friendname, token)
     {
          console.log("Adding friend")
          return this.authenticatedCall('patch', `${url}addFriend`, {Username, Friendname, token})
     }

     async addTeamMember(Username, Teamname, projectID)
     {
          console.log("Add user to team")
          return this.authenticatedCall('patch', `${url}addTeam`, {Username, Teamname, projectID})
     }
     
     async addOwner(username, user, projectID)
     {
          console.log("adding to owners")
          return this.authenticatedCall('patch', `${url}addOwner`, {username, user, projectID})
     }
     
}