    
    const fs = require('fs');
    const requestHandler = (req,res) => {
        const url = req.url;
        const method = req.method;
        if(url==='/'){
            res.setHeader('Content-Type','text/html')
            res.write('<html>')
            res.write('<head><title>Hello</title></head>')
            res.write('<body><form action = "/message" method = "POST"><input type="text" name = "message"></input><button type = "submit">CLick me</button></form></body></html>')
            return res.end();    
        }
        if(url === '/message'){
            const body = [];
            req.on('data' , (chunk) => {
                console.log(chunk);
                body.push(chunk);
            });
            return req.on('end' , () => {
                const parsedBody = Buffer.concat(body).toString();
                const message = parsedBody.split('=')[1];
                fs.appendFile('message.txt' , message, (err) =>{
                    res.statuscode = 302;
                    res.setHeader('Location','/');
                    return res.end();
                });
                
            });
            
        }
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Hello</title></head>')
        res.write('<body>Hello from node js app</body></html>')
        res.end();
        };
        module.exports = requestHandler;
        
        
    


