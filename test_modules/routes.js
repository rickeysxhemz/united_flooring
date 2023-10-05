const fs=require('fs');


const RequestHandler= (req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && req.method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            console.log(parseBody);
            const message=parseBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        });
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
}
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my node.js server</h1></body>');
    res.write('</html>');
    res.end();
}
module.exports=RequestHandler;