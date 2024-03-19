const http = require("http");
const home = require("./views/home");
const student = require("./views/student");

const PORT = 3000;

function startServer() {
  console.log(`Server is running on port ${PORT}`);
}

const listener = (req, res) => {
  
  console.log(`Server is running on port ${PORT}`);

  const url = req.url;
  if (url === "/") {
    res.write(home.renderPage());
  }
  if (url === "/student") {
    res.write(student.renderPage());
  }
  res.end();
 
};


http.createServer(listener).listen(PORT,startServer);