import mongoose from "mongoose";

const schema = new mongoose.schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaType.objectId,
            ref: 'orders'
        }
    ]
})

const UserModel : mongoose.model('users', schema)

export default UserModel