export class LevelModel {
    constructor(
      public status_code : string,
      public message : string,
      public error : string,
      public level : [{
        id: string,
        name : string,
        rank : number,
        created_date : string,
        updated_date : string
      }]
    ) { }
  }