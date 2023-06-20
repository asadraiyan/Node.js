// console.log("welcome to the world")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Box shadow & Text shadow</title>
        <style>
            .container{
                display: flex;
            }
    .card{
        // border: 2px solid red;
        padding: 20px 13px;
        margin: 23px 12px;
        background-color: rgb(210, 189, 230);
        box-shadow: 4px 4px 2px 2px rgb(137, 137, 180);
    }
    .card h2{
        text-shadow: 2px 2px 2px white;
    }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="card" id="card1">
                <h2>This is first card</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque delectus at, cum accusantium laudantium culpa minima, autem optio reprehenderit repellendus incidunt omnis similique tempore voluptatum perferendis illo dolor molestias praesentium saepe ratione voluptatem. Voluptate, qui.</p>
    
            </div>
            <div class="card" id="card2">
                <h2>This is second card</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque delectus at, cum accusantium laudantium culpa minima, autem optio reprehenderit repellendus incidunt omnis similique tempore voluptatum perferendis illo dolor molestias praesentium saepe ratione voluptatem. Voluptate, qui.</p>
            </div>
            <div class="card" id="card3">
                <h2>This is third card</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque delectus at, cum accusantium laudantium culpa minima, autem optio reprehenderit repellendus incidunt omnis similique tempore voluptatum perferendis illo dolor molestias praesentium saepe ratione voluptatem. Voluptate, qui.</p>
            </div>
        </div>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});