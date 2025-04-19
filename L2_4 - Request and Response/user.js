const http = require('http')
const fs = require('fs')

const PORT = 3000
const server = http.createServer((req, res) =>{
  console.log(req.headers, req.method, req.url);
//   res.setHeader('Content-Type', 'json');
//   res.write("helo")
if (req.url === '/'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
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
   fs.writeFileSync('user.txt', "Apurv G.")
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

server.listen(PORT, ()=>{
    console.log(`Server Started at port http://localhost:${PORT}`);
})