const UserSchema = new SChema({
    emai: {req:true, lowercase: small, unique: true},
    password: {type: String, req: true},
});