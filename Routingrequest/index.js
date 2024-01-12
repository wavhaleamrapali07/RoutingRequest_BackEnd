const http = require('http')
const port = 3000;


const server =http.createServer((req, res)=>{
    res.end ('<h1>hello from node js server...</h1>')

})

server.listen(port, ()=>{
    console.log(`Server is listening on http://localhost:${port}`);
});

