export class LevelModel {
    constructor(
      public level : [{
        id: string,
        name : string,
        rank : number,
        created_date : string,
        updated_date : string
      }]
    ) { }
  }