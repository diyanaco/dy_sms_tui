export class StudentModel {
    constructor(
      public id: number,
      public first_name?: string,
      public last_name?: string,
      public iq? : number
    ) { }
  }