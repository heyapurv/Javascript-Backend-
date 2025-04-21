const http = require('http')
const requestHandler = require('./user.js')
const server = http.createServer(requestHandler)


const PORT = 3000
server.listen(PORT, () =>{
    console.log(`Server Started at port http://localhost:${PORT}`);
})