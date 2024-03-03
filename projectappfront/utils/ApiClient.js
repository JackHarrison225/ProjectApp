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
                    authorization: this.tokenProvider() ? `Bearer ${this.tokenProvider()}` : '',
                    
               },
               data, 
          }).catch((error) => {
               console.log(error)
               if (error.response) {
                    switch (error.response.status) {
                         case 400:
                              alert("You cannot add the same project more than once. Please choose a different project.")
                              break;
                         case 403:
                              alert("Access forbidden. Please log in again.")
                              this.logoutHandler();
                              break;
                         default:
                              alert("There was an error, please try again.")
                         } 
               } else {
                    alert("A network error occured. Please check your connection and try again.")
               }

               return false;


     });
     }

     async checkToken(Token)
     {
          console.log("Check Token")
          return this.authenticatedCall("get", `${url}Token/${Token}`);
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
     

     async getCreatedProjects(_id) {
          console.log("Sending _id", _id)
          return this.authenticatedCall ("get", `${url}createdProjects/${_id}`)
     }

     async getSavedProjects(_id) {
          console.log("Sending _id", _id)
          return this.authenticatedCall ("get", `${url}savedProjects/${_id}`)
     }

     async getFavouriteProjects(_id) {
          console.log("Sending _id", _id)
          return this.authenticatedCall ("get", `${url}favouriteProjects/${_id}`)
     }

     async getOngoingProjects(_id) {
          console.log("Sending _id", _id)
          return this.authenticatedCall ("get", `${url}ongoingProjects/${_id}`)
     }

     async CreateProject(title, tags, description, picture, token)
     {
          console.log("Creating project...")
          return this.authenticatedCall("post", `${url}CreateProject`, {title,  tags, description, picture, token})
     }

     async addToFavourites(_id) {
          console.log("Adding to favourites", _id)
          this.authenticatedCall("post", `${url}addToFavouriteProjects/${_id}`)
     }

     async addToSavedProjects(_id) {
          console.log("Adding to savedProjects", _id)
          this.authenticatedCall("post", `${url}addToSavedProjects/${_id}`)
     }

     async addToOngoingProjects(_id) {
          console.log("Adding to Ongoing projects", _id)
          this.authenticatedCall("post", `${url}addToOngoingProjects/${_id}`)
     }

     async deleteProject(id)
     {
          console.log("Deleting..")
          return this.authenticatedCall("delete", `${url}deleteproject/${id}`)
     }

     async UpdateProject(title, tags, description, picture, id)
     {
          console.log("Updating..")
          return this.authenticatedCall("patch", `${url}updateproject`, { title, tags, description, picture, id })
     }



}