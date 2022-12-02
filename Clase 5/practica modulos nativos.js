const fs = require ('fs')
const crypto = require ('crypto')

const filename = './users.json'
class UserManager {

    getUsers = async() => {
    if (fs.existsSync(filename)){
        const data = await fs.promises.readFile(filename, 'utf-8')
        const users = JSON.parse(data)
        return users
    }
    return []
}

creatUser = async(user) => {
    const user = await this.getUsers()

    user.salt = crypto.randomBytes(128).toString('base64')
    user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

    users.push(user)

    await fs.promises.writeFile(filename, JSON.stringify(users))

    return users
}

}

console.log()