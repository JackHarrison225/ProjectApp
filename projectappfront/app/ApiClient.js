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

     async addEmail(username, email)
     {
          //patch/post
          //find user and add email to specific user
     }

     async forgotPasswordLink(username, email)
     {
          //patch
          //find user and send email to reset password
     }

    async changePassword(type, userObject)
    {
          //patch
          // if from link take userID
          // find user with userID and change password to new password
          // if from profile take username and email and password to change password
          //find user with username, email check oldpassword and change to new password
    }

     async ChangeUsername(email, password, username, newUsername)
     {
          //patch
          //find user with email check password change username to newUsername
     }

     async changePassword(username, token, password, newPassword)
     {
          //patch
          //find user check token check password update password
     }

     async checkUsername(userDetails) 
     {
          console.log("Checking username in database")
          return this.authenticatedCall('get', `${url}username/${userDetails.Username}`);
     }
     
     async addFriend(username, user)
     {
          // patch
          // add user to usernams friends list
          console.log("Adding friend")
          return this.authenticatedCall('patch', `${url}addFriend`, {username, user})
     }

     async addTeamMember(username, user)
     {
          // patch
          // check username in project owner
          // add user to projects team
          console.log("Add user to team")
          return this.authenticatedCall('patch', `${url}addTeam`, {username, user})
     }
     
     async addOwner(username, user)
     {
          // patch 
          // check username in project owner
          // add user to projects owner and remove from project team
          console.log("adding to owners")
          return this.authenticatedCall('patch', `${url}addOwner`, {username, user})
     }
     
}