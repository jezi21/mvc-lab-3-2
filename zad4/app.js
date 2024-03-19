const http = require("http");
const handler = require("./routes/index");


const PORT = 3000;

function startServer() {
  console.log(`Server is running on port ${PORT}`);
}

const listener = (req, res) => {
  
  console.log(`Server is running on port ${PORT}`);


  const url = req.url;
  if (url === "/") {
    handler.handleHome(req, res);
  }
  else if (url === "/student") {
    handler.handleStudent(req,res);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 Not Found");
  }
  res.end();
 
};


http.createServer(listener).listen(PORT,startServer);