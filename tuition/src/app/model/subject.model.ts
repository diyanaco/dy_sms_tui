export class SubjectModel {
    constructor(
      public status_code : string,
      public message : string,
      public error : string,
      public subject : [{
        id: string,
        name : string,
      }]
    ) { }
  }