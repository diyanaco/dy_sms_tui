export class StudentModel {
    constructor(
      public status_code : string,
      public message : string,
      public error : string,
      public student : {
        id: string,
        user_id: string,
        fav_sub: string,
        created_date : string,
        updated_date : string
      }
    ) { }
  }