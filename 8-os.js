const os = require('os')

const user = os.userInfo()
console.log(user)

//info about current user


console.log(`the system uptime is ${os.uptime()} seconds`)
// method returns the system uptime in seconds