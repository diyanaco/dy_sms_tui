export class ResponseModel<T> {
    constructor(
        public status_code : string,
        public message : string,
        public error : string,
        public data : T []
    ){}
}