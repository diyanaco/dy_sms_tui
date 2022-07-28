export class UserModel {
    constructor(
      public status_code : number,
      public message : string,
      public error : string,
      public user : [{
        id: string,
        last_name : string,
        first_name : string,
        email : string,
        created_date : string,
        updated_date : string
      }]
    ) { }
  }