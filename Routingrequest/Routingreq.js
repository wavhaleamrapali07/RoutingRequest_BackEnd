const http = require('http');
port = 3000;



const server =http.createServer((req, res)=>{




const url = req.url;
if(url==='/'){
    res.write('<html>')
    res. write('<head><title>my Form</title></head>')
    res.write('<body><form action="/message" method = "POST"><input type ="text" placeholder = "Enter message"/><input type ="submit"/></form></body>')
    res.write('</html>')
    return res.end();
}

res.setHeader("Content-type","text/html");

res.write('<html>')
res. write('<head><title>my message</title></head>')
res.write('<body><h1>hello this is message page</h1></body>')
res.write('</html>')
res.end();
});



server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


