const fs = require ('fs')
const crypto = require ('crypto')

const filename = './users.json'
class UserManager {
    getUsers = async() =>}
    if (fs.existsSync(filename)){
        const data = await fs.promises.readFile(filename, 'utp-8')
        const users = JSON.parse(data)
        return users
    }
}