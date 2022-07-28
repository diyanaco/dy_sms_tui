export class StudentModel {
    constructor(
      public student : {
        id: string,
        user_id: string,
        fav_sub: string,
        created_date : string,
        updated_date : string
      }
    ) { }
  }