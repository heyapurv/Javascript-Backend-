const http = require('http')


//  you can create the function in this way or 
// function requestListener(req, res){
//     console.log(req);
    
// }


// this way -- Anynomous functino

// http.createServer(function requestListener(req, res){
//     console.log(req);
    
// })

// or arrow function
const PORT = 3000
const server = http.createServer((req, res) =>{
  console.log(req.headers, req.method, req.url);
  
})

server.listen(PORT, ()=>{
    console.log(`Server Started at port ${PORT}`);
})