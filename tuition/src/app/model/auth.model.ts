
export class AuthUserModel{
    constructor(
        public status_code : number,
        public message : string,
        public error: string,
        public user_auth: {
            email : string,
            password: string,
            access_token : string,
            refresh_token : string,
        },
        public user : {
            id : string,
            last_name : string,
            first_name : string,
            email : string,
            created_date : string,
            updated_date : string
        } ){
    }
}