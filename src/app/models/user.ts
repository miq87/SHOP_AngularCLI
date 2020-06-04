export class User {
    _id: string
    username: string
    email: string
    phone: string
    password: string

    constructor(username, email, phone, password) {
        this.username = username
        this.email = email
        this.phone = phone
        this.password = password
    }
}
