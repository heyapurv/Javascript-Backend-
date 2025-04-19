const http = require('http')


const PORT = 3000
const server = http.createServer((req, res) =>{
  console.log(req.headers, req.method, req.url);
//   res.setHeader('Content-Type', 'json');
//   res.write("helo")
if (req.url === '/'){

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>NODE TUTORIALS</head></title>')
    res.write('<body><h1>HELLO THERE HOMEPAGE</h1></body>')
    res.write('</html>')
    return res.end()
}else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>NODE TUTORIALS</head></title>')
    res.write('<body><h1>Welcome to Product Page </h1></body>')
    res.write('</html>')
    return res.end()
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