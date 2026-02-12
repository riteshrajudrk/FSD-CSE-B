const http = require('http')
const PORT = 4005;
// import sum from './getData';



const fetchServerData = require('./getData')
const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // res.setHeader('content-type', 'text/html')
    // res.end("<h1>hii from the serer.</h1>");
    if(req.url==="/msg" && req.method==="GET"){
        res.setHeader('content-type', 'text/html');
        res.end('<h1 style="color:red; background-color:yellow">Welcome to the server</h1>')
    }

    if(req.url==="/data" && req.method==="POST"){
        const result = await fetchServerData();
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({msg:result}));
    }

    if(req.url==="/data" && req.method==="PUT"){
        res.setHeader('content-type', 'text/json');
        res.end(JSON.stringify({msg:"Data updated successfully"}));
    }

    // console.log(Object.keys(req))
})

server.listen(PORT, () => {
    console.log("server is running on port 4005");
})