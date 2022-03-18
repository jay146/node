const superheroes = require('superheroes');
const fs=require('fs');
const http=require('http');
filepath="test1.txt";
// x=superheroes.all;
//  y=http.STATUS_CODES;
//  console.log(y);
PORT=2000;
jsondata={ id: 1, name: "Catcher in the Rye" };
const server=http.createServer((req,res)=>
{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("Hello world"); 
      res.write("<br/>");
    //   req.on('data', (chunk) => {
    //     console.log('You received a chunk of data', chunk)
    //   });
res.end(JSON.stringify(jsondata));
      
     
}); 

                server.listen(PORT,()=>
                {
                    console.log(`Server is listening to port ${PORT}`)
                });
        


 


