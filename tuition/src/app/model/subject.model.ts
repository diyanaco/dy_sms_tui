export class SubjectModel {
    constructor(
      public subject : [{
        id: string,
        name : string,
        created_date : string,
        updated_date: string
      }]
    ) { }
  }