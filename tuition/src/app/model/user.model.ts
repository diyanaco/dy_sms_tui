export class UserModel {
    constructor(
      public status_code : number,
      public message : string,
      public user_auth : {
        access_token : string,
        refresh_token : string
      }
    ) { }
  }