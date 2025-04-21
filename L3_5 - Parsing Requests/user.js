
const fs = require('fs');
const { json } = require('stream/consumers');
const requestHandler = ((req, res) =>{
//   console.log(req.headers, req.method, req.url);
//   res.setHeader('Content-Type', 'json');
//   res.write("helo")

if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>BACKEND TUTORIAL</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end()

} else if(req.url.toLocaleLowerCase() ==='/submit-details' && req.method ==='POST'){
    const body = [];
    req.on('data', (chunk) => {
       console.log(chunk.toString());
       fs.writeFileSync('user.txt', chunk.toString())
   })
   req.on('end', ()=>{
    const fullBody = Buffer.concat(body).toString()
    console.log(fullBody);
    const params = new URLSearchParams(fullBody)
    const bodyObject = {}
    for (const [key, value] of params.entries()) {
        bodyObject[key] = value
    }
    console.log(bodyObject);
    const jsonData = JSON.stringify(bodyObject)
   fs.writeFileSync('user.txt', jsonData)
   })
   
   res.statusCode = 302
   res.setHeader('Location', '/')
   // 302 means redirection
}


res.setHeader('Content-Type', 'text/html');
res.write('<html>')
res.write('<head><title>NODE TUTORIALS</head></title>')
res.write('<body><h1>NOPAGE </h1></body>')
res.write('</html>')
return res.end() 
})


module.exports = requestHandler